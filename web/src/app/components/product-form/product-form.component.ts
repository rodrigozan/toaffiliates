import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  imports: [BrowserModule, ReactiveFormsModule]
})
export class ProductFormComponent {
  productForm!: FormGroup;
  finalPrice: number = 0;  // Nova propriedade para armazenar o resultado

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      mainKeywords: ['', Validators.required],
      bonusQuantity: [0, [Validators.min(0)]],
      basePrice: [0, [Validators.min(0)]],
      discountPercentage: [0, [Validators.min(0), Validators.max(100)]]
    });

    // Atualiza automaticamente quando os valores mudam
    this.setupAutoCalculation();
  }

  private setupAutoCalculation() {
    // Observa mudanças nos campos relevantes
    const priceControls = ['basePrice', 'discountPercentage'];

    priceControls.forEach(controlName => {
      this.productForm.get(controlName)?.valueChanges.subscribe(() => {
        this.calculateFinalPrice();
      });
    });
  }

  calculateFinalPrice() {
    const values = this.productForm.value;

    // Conversão explícita para números
    const basePrice = Number(values.basePrice) || 0;
    const discount = Number(values.discountPercentage) || 0;

    // Cálculo do preço final
    const discountAmount = basePrice * (discount / 100);
    this.finalPrice = basePrice - discountAmount;

    // Arredondamento para 2 casas decimais
    this.finalPrice = Math.round(this.finalPrice * 100) / 100;
  }
}