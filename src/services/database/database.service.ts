import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { DataProviderService } from '../Data-Provider/data-provider.service';
import { addDoc, collection, collectionChanges, collectionData, doc, docData, Firestore, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';

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
}
