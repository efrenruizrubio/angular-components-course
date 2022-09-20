import { Component, OnInit } from '@angular/core';
import { Product } from '@models/product.model';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  shoppingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: 'https://picsum.photos/728/320',
      price: 100,
      quantityLeft: 10,
    },
    {
      id: '2',
      name: 'Product 2',
      image: 'https://picsum.photos/729/320',
      price: 200,
      quantityLeft: 20,
    },
    {
      id: '3',
      name: 'Product 3',
      image: 'https://picsum.photos/730/320',
      price: 300,
      quantityLeft: 30,
    },
    {
      id: '4',
      name: 'Product 4',
      image: 'https://picsum.photos/731/320',
      price: 400,
      quantityLeft: 0,
    },
  ];

  constructor(private storeService: StoreService) {
    this.shoppingCart = this.storeService.getShoppingCart();
    this.storeService.setProducts(this.products);
  }

  ngOnInit(): void {}

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  onRemoveFromShoppingCart(product: Product) {
    this.storeService.removeProduct(product);
    this.total = this.storeService.getTotal();
  }
}
