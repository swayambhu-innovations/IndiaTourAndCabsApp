export type blogs = {
    id?: string;
    title: string;
    description: string;
    photoURL: string;
    created: string;
    author:user
}

export type user = {
    displayName: string;
    email: string;
    photoURL: string;
    phone: string;
    userId?: string;
    address?: location;
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
