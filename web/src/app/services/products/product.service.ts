import { Injectable } from '@angular/core';

import { iProduct } from '../../interfaces/iProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  setProduct(product: iProduct): iProduct | undefined {
    return product;
  }

  getProduct(product: iProduct): iProduct | undefined {
    return product;
  }
}
