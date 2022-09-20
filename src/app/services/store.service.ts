import { Injectable } from '@angular/core';
import { Product } from '@models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shoppingCart: Product[] = [];
  private products: Product[] = [];
  total: number = 0;

  constructor() {}

  getShoppingCart() {
    return this.shoppingCart;
  }

  setProducts(products: Product[]) {
    this.products = products;
  }

  getTotal() {
    return this.total;
  }

  addProduct(product: Product) {
    if (product.quantityLeft > 0) {
      const index = this.products.indexOf(product);
      this.shoppingCart.push(product);
      this.products[index].quantityLeft -= 1;
      this.total += product.price;
    } else {
      alert('No hay mas productos');
    }
  }

  removeProduct(product: Product) {
    if (this.shoppingCart.includes(product)) {
      const index = this.shoppingCart.indexOf(product);
      this.shoppingCart[index].quantityLeft += 1;
      this.shoppingCart.splice(index, 1);
      this.total -= product.price;
    } else {
      alert(
        'No puedes eliminar un producto que no está en tu carrito de compras'
      );
    }
  }
}
