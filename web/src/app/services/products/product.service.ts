import { Injectable } from '@angular/core';
import { signal, Signal } from '@angular/core';

import { iProduct } from '../../interfaces/iProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product = signal<iProduct | null>(null);

  setProduct(product: iProduct): void {
    this.product.set(product);
  }

  getProduct(): Signal<iProduct | null> {
    return this.product;
  }
}
