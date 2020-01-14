import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('The product has been shared!');
  }
}
