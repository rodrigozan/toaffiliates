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
  product: iProduct | null = null;
  productForm!: FormGroup;
  discountData: boolean = false;


  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      keyword: [''],
      bonusAmount: [0],
      warranty: [0],
      fullPrice: [0],
      anchorPrice: [0],
      maxDiscount: [0],
      maxAnchorNumber: [0],
      adUrl: [''],
      trackingUrl: [''],
      maxDiscountPercentage: [0],
      maxDiscountAmount: [0]
    });
  }

  generateResources(): void {
    this.product = this.productForm.value;
    console.log('Product data:', this.product);

    if (this.product && this.product.fullPrice > 0) {      
      this.product.maxDiscountAmount = this.product.fullPrice - this.product.maxDiscount;
      this.product.maxDiscountPercentage = ((this.product.fullPrice - this.product.maxDiscount) / this.product.fullPrice) * 100;

      this.productService.setProduct(this.product);
      this.discountData = true;
    }
    
    
    console.log('Product data:', this.product);
  }

}
