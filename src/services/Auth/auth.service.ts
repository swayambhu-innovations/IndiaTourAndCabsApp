import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, GoogleAuthProvider, linkWithPhoneNumber, signInWithCredential, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, User, getAuth, RecaptchaVerifier, UserCredential, } from '@angular/fire/auth';
import {addDoc,collection,deleteDoc,doc,DocumentReference,Firestore,getDoc,getDocs,setDoc,updateDoc} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { urls } from '../url';
import { DataProviderService } from '../Data-Provider/data-provider.service';
import { AlertsAndNotificationsService } from '../uiService/alerts-and-notifications.service';
import { Platform } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { EMPTY, Observable, Subject } from 'rxjs';
import { UserData } from 'src/structures/user.structure';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  phoneAuth = getAuth();
  userDocument!: DocumentReference;
  public userAvailable: Subject<any> = new Subject();
  public userId: any;
  public userIsLoggedIn: boolean = false;
  public newUser: boolean = false;
  public readonly user: Observable<User | null> = EMPTY;
  private currentUser: User | any = null;
  constructor(
    private fs: Firestore,
    private auth: Auth,
    private router: Router,
    private dataprovider: DataProviderService,
    private alertify: AlertsAndNotificationsService,
    private platform: Platform
  ) {
    if (auth) {
      console.log(this.auth);
      this.user = authState(this.auth);

      this.user.subscribe((user: any) => {
        if (user) {
          this.currentUser = user;
          console.log(user);
          this.userIsLoggedIn = true;
          this.userId = user.uid;
          this.dataprovider.user = user;
          this.userAvailable.next(user);
        } else {
          this.userIsLoggedIn = false;
        }
      });
    }
  }

  public signInWithPhoneNumber(phoneNumber: number) {
    const verifier = new RecaptchaVerifier('recaptcha-container', { size: 'invisible' }, this.auth)
    return linkWithPhoneNumber(this.currentUser, ('+91' + phoneNumber), verifier);
  }

  public loginWithEmailPassword(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((credentials: UserCredential) => {
        console.log(credentials);
        this.alertify.presentToast('Logged In Successfully');
        this.router.navigateByUrl('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public signUpWithEmailAndPassword(email: any, password: any, username: any) {
    let data = createUserWithEmailAndPassword(this.auth, email, password)
      .then(async (credentials: UserCredential) => {
        await this.setEmailUserData(credentials.user, {
          phoneNumber: '',
          photoURL: '',
          displayName: username || '',
          dateOfBirth: Date.now(),
          gender: '',
          address: '',
        });
      })
      .catch((err) => {
        console.log(err);
        this.dataprovider.loading = false;
        this.alertify.presentToast(err);
      });
  }

  public async setEmailUserData(user: User, userData: any) {
    let data: UserData = {
      id: user.uid || '',
      email: user.email || '',
      displayName: userData.displayName || '',
      photoURL: userData.photoURL || this.getRandomImage(),
      phone: userData.phoneNumber || '',
      emailVerified: true,
      access: { access: 'customer' },
      dateOfBirth: userData.dateOfBirth,
      gender: userData.gender || '',
      address: userData.address || '',
      currentLanguage: 'english'
    };
    this.userDocument = doc(this.fs, urls.users + user.uid);
    await setDoc(this.userDocument, data).then(() => {
      this.alertify.presentToast('Account created Successfully');
      // this.router.navigateByUrl('/home');
    });
    this.dataprovider.loading = false;
    // this.router.navigate(['/all-products'])
  }

  public async setGoogleUserData(user: User, userData: any) {
    let data: UserData = {
      id: user.uid || '',
      email: user.email || '',
      displayName: userData.displayName || '',
      photoURL: userData.photoURL || this.getRandomImage(),
      phone: userData.phoneNumber || '',
      emailVerified: true,
      access: { access: 'customer' },
      dateOfBirth: userData.dateOfBirth,
      gender: userData.gender || '',
      address: userData.address || '',
      currentLanguage: 'english'
    };
    this.userDocument = doc(this.fs, urls.users + user.uid);
    await setDoc(this.userDocument, data).then(() => {
      this.alertify.presentToast('Account created Successfully');
      this.router.navigateByUrl('/home');
    });

    // this.router.navigate(['/all-products'])
  }

  getRandomImage(): string {
    return (
      'https://avatars.dicebear.com/api/gridy/' +
      (Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)) +
      '.svg'
    );
  }

  public async logout() {
    this.dataprovider.LoggedInUser = false;
    this.dataprovider.user = {} as UserData;

    return await signOut(this.auth).then((res) => {
      this.dataprovider.LoggedInUser = false;
      this.router.navigateByUrl('/login');
    });
  }

  public async signUpWithGoogle() {
    if (this.platform.is('capacitor')) {
      GoogleAuth.signIn()
        .then((googleUser: any) => {
          alert('Google User: ' + googleUser.id);
          const credential = GoogleAuthProvider.credential(
            googleUser.authentication.idToken,
            googleUser.authentication.accessToken
          );
          signInWithCredential(this.auth, credential)
            .then((credentials: UserCredential) => {
              console.log('Credentials ', credentials);
              getDoc(doc(this.fs, urls.users + credentials.user.uid))
                .then((userDocument: any) => {
                  if (!userDocument.exists()) {
                    this.setEmailUserData(credentials.user, {
                      phone: credentials.user.phoneNumber || '',
                      photoURL: credentials.user.photoURL || '',
                      displayName: credentials.user.displayName || '',
                      dateOfBirth: Date.now(),
                      gender: '',
                    }).then(() => {
                      // this.router.navigate(['']);
                    });
                  } else {
                    this.alertify.presentToast(
                      'Logged In.',
                      'info',
                      5000,
                      [],
                      true,
                      ''
                    );
                    this.router.navigate(['']);
                  }
                })
                .catch((error) => {
                  console.log('ErrorCatched getting data', error);
                  this.alertify.presentToast(
                    error.message,
                    'error',
                    5000,
                    [],
                    true,
                    ''
                  );
                });
            })
            .catch((error) => {
              console.log('ErrorCatched authorizing', error);
              this.alertify.presentToast(
                error.message,
                'error',
                5000,
                [],
                true,
                ''
              );
            });
        })
        .catch((error) => {
          console.log('ErrorCatched', error);
          this.alertify.presentToast(
            error.message,
            'error',
            5000,
            [],
            true,
            ''
          );
        });
    } else {
      const gauth = new GoogleAuthProvider();
      signInWithPopup(this.auth, gauth)
        .then((credentials: UserCredential) => {
          console.log('Credentials ', credentials);
          getDoc(doc(this.fs, urls.users + credentials.user.uid))
            .then((userDocument: any) => {
              if (!userDocument.exists()) {
                this.setEmailUserData(credentials.user, {
                  phone: credentials.user.phoneNumber || '',
                  photoURL: credentials.user.photoURL || '',
                  displayName: credentials.user.displayName || '',
                  dateOfBirth: Date.now(),
                  gender: '',
                }).then(() => { });
              }
              // this.router.navigateByUrl('/home');
            })
            .catch((error) => {
              console.log('ErrorCatched getting data', error);
              this.alertify.presentToast(
                error.message,
                'error',
                5000,
                [],
                true,
                ''
              );
            });
        })
        .catch((error) => {
          // console.log(error.message);
          console.log('Error when signing in');
        })
        .finally(() => {
          console.log('Finally');
        });
    }
  }
}