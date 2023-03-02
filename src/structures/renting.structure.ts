import { Timestamp } from "@angular/fire/firestore";

export type renting = {

    pickupLocation: location;
    package: packages;
    pickupStartDate: Timestamp;
    pickupEndDate: Timestamp;
    guideAvailable: boolean;
    type: 'renting';
    status: 'pending' | 'accepted' | 'rejected' | 'completed';
    created: Timestamp;
    updated?: Timestamp;
    user: user;
    driver?: driver;
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