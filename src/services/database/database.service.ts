import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { DataProviderService } from '../Data-Provider/data-provider.service';
import { addDoc, collection, collectionChanges, collectionData, doc, docData, Firestore, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { booking } from 'src/structures/booking.structure';
import { urls } from '../url';

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
  
  bookings(ride: booking) {
    return addDoc(collection(this.fs, urls.bookings), ride);
  }

  renting(ride: booking) {
    return addDoc(collection(this.fs, urls.bookings), ride);
  }

  guide(data: booking) {
    return addDoc(collection(this.fs, urls.bookings), data);
  }

  outstation(data: booking) {
    return addDoc(collection(this.fs, urls.bookings), data);
  }

  // Orders
  
  userRides(id:any){
    console.log(this.dataProvider.user?.id);
    return collectionData(query(collection(this.fs, urls.bookings), where('user.userId', '==', id),where('type', '==' , 'cab')), { idField: 'id' });
  }
  userRenting(id:any){
    console.log(this.dataProvider.user?.id);
    return collectionData(query(collection(this.fs, urls.bookings), where('user.userId', '==', id),where('type', '==' , 'rental')), { idField: 'id' });
  }

  userGuide(id:any){
    console.log(this.dataProvider.user?.id);
    return collectionData(query(collection(this.fs, urls.bookings), where('user.userId', '==', id),where('type', '==' , 'guide')), { idField: 'id' });
  }

  userOutstation(id:any){
    console.log(this.dataProvider.user?.id);
    return collectionData(query(collection(this.fs, urls.bookings), where('user.userId', '==', id),where('type', '==' , 'outstation')), { idField: 'id' });
  }

  getBookingDetails(BOOKING_ID:any){
    const bookingUrl = urls.booking.replace('{BOOKING_ID}', BOOKING_ID);
    return getDoc(doc(this.fs, bookingUrl));
  }

  // Blogs

  blogs(){
    return getDocs(collection(this.fs, urls.blogs));
  }

  blogDetails(BLOG_ID:any){
    const blogUrl = urls.blog.replace('{BLOG_ID}', BLOG_ID);
    return getDoc(doc(this.fs, blogUrl));
  }

  // Vehicles

  cabVehicles(){
    return getDocs(collection(this.fs, urls.vehicleCab));
  }
  rentalVehicles(){
    return getDocs(collection(this.fs, urls.vehicleRental));
  }

  outstationVehicles(){
    return getDocs(collection(this.fs, urls.vehicleOutstation));
  }

  // getRentalPackages
  getRentalPackages(){
    return getDocs(collection(this.fs, urls.rentalPackages));
  }

  getGuidePackages(){
    return getDocs(collection(this.fs, urls.guidePackages));
  }
  // Locations
  getLocations(){
    return getDocs(collection(this.fs, urls.locations));
  }

  tours(){
    return getDocs(collection(this.fs, urls.tours));
  }

  singleTours(TOUR_ID:any){
    const tourUrl = urls.tour.replace('{TOUR_ID}', TOUR_ID );
    return getDoc(doc(this.fs, tourUrl));
  }

  getSpots(){
    return getDocs(query(collection(this.fs,'spots')));
  }
  
  getSpot(spotId:string){
    return getDoc(doc(this.fs,'spots',spotId));
  }

  getRentalService(){
    return getDoc(doc(this.fs,'service/rental'));
  }

  getGuideService(){
    return getDoc(doc(this.fs,'service/guide'));
  }

  getOutStationService(){
    return getDoc(doc(this.fs,'service/outstation'));
  }

  getCabService(){
    return getDoc(doc(this.fs,'service/cab'));
  }
  getSettings(){
    return getDoc(doc(this.fs,'siteData/settings'));
  }

  getCurrentUserBookings(){
    return collectionData(query(collection(this.fs, urls.bookings), where('user.userId', '==', this.dataProvider.user?.id)), { idField: 'id' });
  }

  
}


