import { Component, computed, OnInit, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { KeywordsComponent } from './components/keywords/keywords.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { TitlesDescriptionsComponent } from './components/titles-descriptions/titles-descriptions.component';
import { ProductService } from './services/products/product.service';
import { iProduct } from './interfaces/iProduct';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProductDataComponent,
    KeywordsComponent,
    ResourcesComponent,
    TitlesDescriptionsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  productFilled: Signal<boolean> | undefined;
  product: iProduct | undefined

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Se "productService.getProduct()" não precisa de um parâmetro:
    this.productFilled = computed(() => this.product !== undefined && this.productService.getProduct(this.product) !== undefined);

    // Se "productService.getProduct()" precisa de um parâmetro, garantindo que "product" não seja undefined:
    if (this.product) {
      this.productFilled = computed(() => this.productService.getProduct(this.product!) !== undefined);
    } else {
      this.productFilled = signal(false);
    }
  }
}
