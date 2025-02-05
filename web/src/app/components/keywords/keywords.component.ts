import { Component, OnInit, Signal, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeywordService } from '../../services/keywords/keywords.service';
import { ProductService } from '../../services/products/product.service';

import { CopyTextComponent } from '../inc/copy-text/copy-text.component';

@Component({
  selector: 'app-keywords',
  standalone: true,
  imports: [CommonModule, CopyTextComponent],
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {
  lowKeywords: Signal<string[]> = signal([]);
  highKeywords: Signal<string[]> = signal([]);
  alertStatus = new Map<string, boolean>();

  constructor(
    private keywordService: KeywordService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productSignal = this.productService.getProduct();

    this.lowKeywords = computed(() => {
      const product = productSignal();
      return product ? this.keywordService.generateKeywords(product).low : [];
    });

    this.highKeywords = computed(() => {
      const product = productSignal();
      return product ? this.keywordService.generateKeywords(product).high : [];
    });
  }

}
