import { Product } from './product';

export class ShoppingCartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantiti: number;
    
    get totalPrice() { return this.price * this.quantiti; }
}