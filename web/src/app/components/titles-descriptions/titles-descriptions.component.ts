import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-titles-descriptions',
  standalone: true,
  imports: [],
  templateUrl: './titles-descriptions.component.html',
  styleUrl: './titles-descriptions.component.scss'
})
export class TitlesDescriptionsComponent {
  productForm!: FormGroup;
  titleForm: FormGroup;
  descriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.titleForm = this.fb.group({
      title: ['', []],
      maxLength: [60, []]
    });

    this.descriptionForm = this.fb.group({
      description: ['', []],
      maxLength: [160, []]
    });
  }

  generateTitle() {
    const base = `[PROMOÇÃO] ${this.productForm.value.productName}`;
    const discount = ` com ${this.productForm.value.discountPercentage}% OFF`;
    
    return base + (this.productForm.value.discountPercentage > 0 ? discount : '');
  }
}
