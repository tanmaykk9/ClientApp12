import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  headerTitle: string = "You have selected a product";
  listProduct = [];
  productVal: any;
  productMessage: string = "Please Select a Drink";
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.productAdded.subscribe((data => {
      this.listProduct.push(data); // Pushed data to iterate for future use
      //console.log(this.listProduct);
      this.productVal = data;
      if (this.productVal === "1") {
        this.productMessage = "Milk";
      }
      else if (this.productVal === "2") {
        this.productMessage = "Orange";
      } else {
        this.productMessage = "Invalid Prop Type";
      }
    }));
  }
}
