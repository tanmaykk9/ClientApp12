import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = "https://localhost:44352/api/Products";

  constructor(private httpClient: HttpClient) { }

  public getProduct(id: any) {
    if (id) {
      return this.httpClient.get<Products[]>(`${this.apiUrl}`); 
    }
  }
}
