import { Component, OnInit, Signal, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesService } from '../../services/resources/resources.service';
import { ProductService } from '../../services/products/product.service';

import { iProduct } from '../../interfaces/iProduct';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  product: iProduct | null = null;
  highlights: Signal<string[]> = signal([]);
  snippets: Signal<{ title: string; titleLength: number; }[]> = signal([]);
  siteLinks: Signal<{ title: string; description1: string; description2: string; url: string; titleLength: number; description1Length: number; description2Length: number; }[]> = signal([]);

  constructor(
    private resourcesService: ResourcesService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Ouvir o evento do ProductDataComponent
    const productSignal = this.productService.getProduct();
    
    this.highlights = computed(() => {
      const product = productSignal();
      return product ? this.resourcesService.generateHighlightText(product).map(item => item.text) : [];
    });

    this.snippets = computed(() => {
      const product = productSignal();
      return product ? this.resourcesService.generateSnippets(product).map(item => ({
        title: item.title,
        titleLength: item.length
      })) : [];
    });

    this.siteLinks = computed(() => {
      const product = productSignal();
      return product ? this.resourcesService.generateSiteLinks(product) : [];
    });
  }

  generateResources(): void {
    this.product = this.productService.getProduct()();
    if (this.product) {
      const highlights = this.resourcesService.generateHighlightText(this.product);
      const snippets = this.resourcesService.generateSnippets(this.product);
      const siteLinks = this.resourcesService.generateSiteLinks(this.product);

      console.log('Highlights:', highlights);
      console.log('Snippets:', snippets);
      console.log('Site Links:', siteLinks);
    }
  }
}