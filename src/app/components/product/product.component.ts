import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() productAvailable: boolean = true;
  @Input() productRemovable: boolean = false;

  expandName: boolean = false;
  expandDescription: boolean = false;
  @Input() product!: Product;
  @Output() addProduct = new EventEmitter<Product>();
  @Output() removeProduct = new EventEmitter<Product>();
  constructor() {}

  expandProductName() {
    this.expandName = !this.expandName;
  }

  expandProductDescription() {
    this.expandDescription = !this.expandDescription;
  }

  onAddToCart() {
    this.addProduct.emit(this.product);
  }

  onRemoveFromCart() {
    this.removeProduct.emit(this.product);
  }
}
