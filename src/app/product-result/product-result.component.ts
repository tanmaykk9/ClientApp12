import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ApiService } from '../services/api.service';
import { Products } from '../models/products';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-product-result',
  templateUrl: './product-result.component.html',
  styleUrls: ['./product-result.component.css']
})
export class ProductResultComponent implements OnInit {
  btnText: string = "Mix Drink";
  bartenderName: string = "Bartender Joe";
  correctProduct: any;
  defaultMessage: string;
  productsArr: any;
  @Input() eventData: Event;

  constructor(
    private productService: ProductService,
    private apiService: ApiService) { }

  ngOnInit() {
     this.productService.productAdded.subscribe((data => {
      this.correctProduct = data;
      if (this.correctProduct === "1" || this.correctProduct === "2") {
        this.defaultMessage = "Ready to Mix"
      } else {
        this.defaultMessage = "Cannot Mix It";
      }
    }));
    this.apiService.getProduct(Products).subscribe(data => {
     this.productsArr = data;
    });
  }

  onProceed() {
  }

}
