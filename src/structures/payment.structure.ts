import { booking } from "./booking.structure";

export interface paymentDetail extends booking {
    cost: number;
}
export type Seva = {
    name: string;
    price: number;
    image: string;
    id?: string;
    subscriptionPlanId: string;
}