import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '@models/product.model';
import { StoreService } from '@services/store.service';
import { ProductsService } from '@services/products.service';
import { DateService } from '@services/date.service';
import { HeaderService } from '@services/header.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit, OnDestroy {
  productTags: string[] = [
    'Clothes',
    'Electronics',
    'Furniture',
    'Toys',
    'Others',
  ];
  shoppingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [];
  filteredProducts: Product[] = this.products;
  finishDiscount: Date = new Date('2022-09-29T00:00:00');
  today: Date = new Date(0, 0);
  hours: number = 0;
  hoursLeft: number = 0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService,
    private dateService: DateService,
    private headerService: HeaderService
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
        product['tag'] = this.productTags[Math.floor(Math.random() * 5)];
      });
      this.products = data;
      this.storeService.setProducts(data);
    });
    this.headerService.filterString$.subscribe((data) => {
      this.filteredProducts = this.filterProducts(data);
      console.log(this.filteredProducts);
    });
  }

  ngOnDestroy() {
    console.log('element has been deleted');
  }

  setDiscountDate(date: Date) {
    this.finishDiscount = date;
  }

  getDiscountDate() {
    console.log(this.finishDiscount);
    return this.finishDiscount;
  }

  filterProducts(filter: string) {
    return this.products.filter((product) => {
      return product.tag === filter;
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
