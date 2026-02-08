import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product = {
  name: 'iPhone 18 pro max',
  price: 999,
  color: 'black',
  discount: 8.5,
  instock: 10,
  pImage: './assets/Images/iphone.png',
  Owner: 'Vinvitha',
  flag: true
  //isOutOfStock: this.instock > 0 ? true : false,
  
  }
  
  isOutOfStock() {
    return this.product.instock > 0 ? false : true;
  }
  getDiscountedPrice() {
    return (this.product.price - ((this.product.price * this.product.discount)/100))
  }
}
