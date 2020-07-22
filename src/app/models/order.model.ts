import { ArrayType } from '@angular/compiler';

export interface Order {
    id?: string;
    total?: number;
    status?: string;
    deliveryDate: Date;
    productIds: ArrayType;
}
