import { Timestamp } from "@angular/fire/firestore";

export type guide = {

    pickupLocation: location;
    package: packages;
    pickupStartDate: Timestamp;
    pickupEndDate: Timestamp;
    type: 'guide';
    status: 'pending' | 'accepted' | 'rejected' | 'completed';
    created: Timestamp;
    updated?: Timestamp;
    user: user;
    
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


