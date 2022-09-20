import { Component, OnInit } from '@angular/core';
import { Product } from '@models/product.model';
import { StoreService } from '@services/store.service';
import { ProductsService } from '@services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  shoppingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [];

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.shoppingCart = this.storeService.getShoppingCart();
    this.storeService.setProducts(this.products);
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      data.forEach((product) => {
        product['quantityLeft'] = Math.floor(Math.random() * 100);
        console.log(product['quantityLeft']);
      });
      this.products = data;
      this.storeService.setProducts(data);
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  onRemoveFromShoppingCart(product: Product) {
    this.storeService.removeProduct(product);
    this.total = this.storeService.getTotal();
  }
}
