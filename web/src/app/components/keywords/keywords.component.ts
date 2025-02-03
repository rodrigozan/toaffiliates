import { Component, OnInit, Signal, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { iProduct } from '../../interfaces/iProduct';

import { KeywordService } from '../../services/keywords/keywords.service';
import { ProductService } from '../../services/products/product.service';

@Component({
  selector: 'app-keywords',
  standalone: true,
  imports: [CommonModule],
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

  copyText(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.alertStatus.set(text, true);
      setTimeout(() => {
        this.alertStatus.set(text, false);
      }, 3000); 
    }).catch(err => {
      console.error('Erro ao copiar texto: ', err);
    });
  }
}
