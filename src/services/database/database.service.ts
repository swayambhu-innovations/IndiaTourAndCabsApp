import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { DataProviderService } from '../Data-Provider/data-provider.service';
import { addDoc, collection, collectionChanges, collectionData, doc, docData, Firestore, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { cabRide } from 'src/structures/cabRide.structure';
import { urls } from '../url';
import { guide } from 'src/structures/guide.structure';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // public notifications: notificationStructure[] = [];
  // notificationChanged: BehaviorSubject<notificationStructure[]> = new BehaviorSubject<notificationStructure[]>([]);
  storage = getStorage();
  constructor(private fs: Firestore, public dataProvider: DataProviderService) {

  }

  async upload(
    path: string,
    file: File | ArrayBuffer | Blob | Uint8Array
  ): Promise<any> {

    if (file) {
      try {
        const storageRef = ref(this.storage, path);
        const task = uploadBytesResumable(storageRef, file);
        await task;
        const url = await getDownloadURL(storageRef);
        return url;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    } else {
      // handle invalid file
      return false;
    }
  }

  // Specific Creation
  
  bookRide(ride: cabRide) {
    return addDoc(collection(this.fs, urls.rides), ride);
  }

  renting(ride: cabRide) {
    return addDoc(collection(this.fs, urls.renting), ride);
  }

  guide(data: guide) {
    return addDoc(collection(this.fs, urls.guide), data);
  }

  outstation(data: guide) {
    return addDoc(collection(this.fs, urls.outstation), data);
  }

  // Orders
  
  userRides(id:any){
    console.log(this.dataProvider.user?.id);
    return collectionData(query(collection(this.fs, urls.rides), where('user.userId', '==', id)), { idField: 'id' });
  }
  userRenting(id:any){
    console.log(this.dataProvider.user?.id);
    return collectionData(query(collection(this.fs, urls.renting), where('user.userId', '==', id)), { idField: 'id' });
  }

  userGuide(id:any){
    console.log(this.dataProvider.user?.id);
    return collectionData(query(collection(this.fs, urls.guide), where('user.userId', '==', id)), { idField: 'id' });
  }

  userOutstation(id:any){
    console.log(this.dataProvider.user?.id);
    return collectionData(query(collection(this.fs, urls.outstation), where('user.userId', '==', id)), { idField: 'id' });
  }

  // Blogs

  blogs(){
    return getDocs(collection(this.fs, urls.blogs));
  }

  blogDetails(BLOG_ID:any){
    const blogUrl = urls.blog.replace('{BLOG_ID}', BLOG_ID);
    return getDoc(doc(this.fs, blogUrl));
  }
}
