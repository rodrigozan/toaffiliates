import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { iProduct } from '../../interfaces/iProduct';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.scss'
})
export class ProductDataComponent {
  product: iProduct = {
    keyword: '',
    bonusAmount: 0,
    warranty: '',
    installmentPrice: '',
    fullPrice: 0,
    anchorPrice: 0,
    adUrl: '',
    trackingUrl: '',
    maxDiscountPercentage: 0,
    maxDiscountAmount: 0
  };

  dataFilled = false;

  constructor(private productService: ProductService) {}

  generateResources() {
    this.productService.setProduct();
    this.dataFilled = true;
  }

}
