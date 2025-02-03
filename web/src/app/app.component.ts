import { Component, computed, OnInit, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { KeywordsComponent } from './components/keywords/keywords.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { TitlesDescriptionsComponent } from './components/titles-descriptions/titles-descriptions.component';
import { ProductService } from './services/product.service';

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
  productFilled: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const computedSignal = computed(() => this.productService.getProduct() !== null)
    this.productFilled = computedSignal();
  }

}
