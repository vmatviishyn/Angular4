import { Product } from './product';

export class ShoppingCartItem {
    
    constructor(public product: Product, public quantiti: number){ }
    
    get totalPrice() { return this.product.price * this.quantiti; }
}