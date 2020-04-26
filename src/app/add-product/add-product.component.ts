import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  headerMessage: string = "Enter Product Type (Valid entried: 1- Milk, 2- Orange)";

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  @Output() productSelected = new EventEmitter<Event>();
  postProduct: any;
  onProductAdd(postProduct: HTMLInputElement) {
    // next triggers the value
    this.productService.productAdded.next(postProduct.value);
  }
}
