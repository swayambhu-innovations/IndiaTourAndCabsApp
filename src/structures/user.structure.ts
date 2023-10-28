import { Timestamp } from '@angular/fire/firestore';

export type UserData = {
  id?: string;
  photoURL: string;
  address?: Address;
  phone: string;
  email: string;
  currentLanguage: 'english';
  gender?: 'Male' | 'Female' | 'Other';
  termsCondition?: boolean;
  displayName: string;
  access: UserAccess;
  emailVerified: boolean;
  dateOfBirth?: Timestamp;
  created?: Timestamp;
};

export type UserAccess = {
  access: 'admin' | 'customer';
};

type Address = {
  address: string;
  landmark: string;
  pinCode: string;
};









