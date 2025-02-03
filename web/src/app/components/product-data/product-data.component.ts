import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { iProduct } from '../../interfaces/iProduct';

import { ProductService } from '../../services/products/product.service';

@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.scss'
})
export class ProductDataComponent {
  productForm!: FormGroup;
  discountData: { maxDiscountPercentage: number; maxDiscountAmount: number } | null = null;


  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      keyword: [''],
      bonusAmount: [0],
      warranty: [0],
      fullPrice: [0],
      anchorPrice: [0],
      maxAnchorNumber: [0],
      adUrl: [''],
      trackingUrl: [''],
      maxDiscountPercentage: [0],
      maxDiscountAmount: [0]
    });
  }

  generateResources(): void {
    const product: iProduct = this.productForm.value;

    if (product.fullPrice > 0) {
      this.discountData = {
        maxDiscountPercentage: ((product.fullPrice - product.anchorPrice) / product.fullPrice) * 100,
        maxDiscountAmount: product.fullPrice - product.anchorPrice
      };
    }

    if (product.maxDiscountPercentage === 0) {
      product.maxDiscountAmount = product.anchorPrice - product.fullPrice;
    }
    
    this.productService.setProduct(product);
    console.log('Product data:', product);
  }

}
