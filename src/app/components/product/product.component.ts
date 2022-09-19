import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() addProduct = new EventEmitter<Product>();
  @Output() removeProduct = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}

  onAddToCart() {
    this.addProduct.emit(this.product);
  }

  onRemoveFromCart() {
    this.removeProduct.emit(this.product);
  }
}
