import { Component, OnInit } from '@angular/core';
import { Product } from '@models/product.model';
import { StoreService } from '@services/store.service';
import { ProductsService } from '@services/products.service';
import { DateService } from '@services/date.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  shoppingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [];
  finishDiscount: Date = new Date('2022-09-29T00:00:00');
  today: Date = new Date(0, 0);
  hours: number = 0;
  hoursLeft: number = 0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService,
    private dateService: DateService
  ) {
    this.shoppingCart = this.storeService.getShoppingCart();
    this.storeService.setProducts(this.products);
    this.dateService.setFinishDiscount(this.finishDiscount);
    this.finishDiscount = this.dateService.getFinishDiscount();
    this.hours = this.dateService.getHours();
    this.today = this.dateService.getToday();
    this.hoursLeft = this.dateService.timeLeftForDiscount();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      data.forEach((product) => {
        product['quantityLeft'] = Math.floor(Math.random() * 100);
      });
      this.products = data;
      this.storeService.setProducts(data);
    });
  }

  setDiscountDate(date: Date) {
    this.finishDiscount = date;
  }

  getDiscountDate() {
    console.log(this.finishDiscount);
    return this.finishDiscount;
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
