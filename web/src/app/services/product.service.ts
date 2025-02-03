import { Injectable } from '@angular/core';

import { iProduct } from '../interfaces/iProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product: iProduct | null = null;

  constructor() { }

  setProduct(): iProduct | null {
    return this.product;
  }

  getProduct(): iProduct | null {
    return this.product;
  }
}
