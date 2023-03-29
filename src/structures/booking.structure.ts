import { Timestamp } from "@angular/fire/firestore";

export type booking = {

    pickupLocation: location;
    dropLocation: location;
    pickupStartDate: Timestamp;
    pickupEndDate: Timestamp;
    returnStartDate?: Timestamp;
    returnEndDate?: Timestamp;
    guideAvailable: boolean;
    type: 'car' | 'outstation' | 'rental' | 'guide';
    status: 'pending' | 'accepted' | 'rejected' | 'completed';
    created: Timestamp;
    updated?: Timestamp;
    user: user;
    driver?: driver;
    package?: any;
    
}

export type packages = {
    id?: string;
    hours: number;
    kms: number;
}

export type location = {
    id?: string;
    name: string;
    address: string;
    landmark: string;
    pinCode: string;
    lat: number;
    lng: number;
}

export type user = {
    displayName: string;
    email: string;
    photoURL: string;
    phone: string;
    userId?: string;
    address?: location;
}

export type driver = {
    verificationType: 'aadharCard' | 'panCard' | 'voterId' | 'passport';
    phoneNumber: number;
    licenseNumber: string;
    expiryDate: Timestamp;
    photoUrl: string;
    dob: Timestamp;
    displayName: string;
    email: string;
    photoURL: string;
    phone: string;
    userId?: string;
    address?: location;
}

export type vehicle = {
    modelType: string;
    vehicleNumber: string;
    color?: string;
    vehicleImage: string;
    noOfSeats: number;
    vehicleDescription?: string;
    vehicleName: string;
    ratePerKm: number;
    id?: string;
    fuelTankCapacity: number;
    airConditioner: boolean;

}

// New
export interface RentalPackage {
  id?:string;
  hours: number;
  distance: number;
  enabled: boolean;
}
export interface GuideRentalPackage {
  id?:string;
  days: number;
  price: number;
  enabled: boolean;
}
export interface MapLocation {
  id?:string;
  lat: number;
  lng: number;
  name: string;
  enabled: boolean;
  spotTime: number;
}
export interface VehicleCategory {
  image:string;
  vehicleCategory:string;
  description:string;
  seats:number;
  capacity:number;
  acNonac:string;
  fullPrice:number;
  pricePerHour:number;
  enabled:boolean;
  id?:string;
}
export interface VehiclePricingPackages {
  id?:string;
  vehicleCategory:string;
  minimumHours:number;
  maximumHour:number;
  pricePerHour:number;
  enabled:boolean;
}

export interface VehicleCommissionPackages {
  id?:string;
  vehicleCategory:string;
  minimumHours:number;
  maximumHour:number;
  type:'percentage'|'fixed';
  value:number;
  enabled:boolean;
}