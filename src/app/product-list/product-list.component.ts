import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from './search/search.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //name = "Vinvitha";
  addToCart:number = 0; 
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
  onNameChange(event : any)
  {
    //this.product.Owner = "Akkati";
    //this.name = event.target.value;
    //console.log(event);

    //console.log(event.target.value);

  }
  ondecrementPCount(event : any)
  {
    if(this.addToCart>0)
    this.addToCart = this.addToCart - 1; 
    //console.log(event);
  }
  onIncrementPCount(event : any)
  {
    if(this.addToCart < this.product.instock )
    this.addToCart = this.addToCart + 1; 
    //console.log(event);
  }
}
