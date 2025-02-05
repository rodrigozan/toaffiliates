import { Component, OnInit, Signal, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { iProduct } from '../../interfaces/iProduct';

import { ResourcesService } from '../../services/resources/resources.service';
import { ProductService } from '../../services/products/product.service';

import { CopyTextComponent } from '../inc/copy-text/copy-text.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, CopyTextComponent],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  product: iProduct | null = null;
  highlights: Signal<{ title: string; titleLength: number; }[]> = signal([]);
  snippets: Signal<{ title: string; titleLength: number; }[]> = signal([]);
  siteLinks: Signal<{ title: string; description1: string; description2: string; url: string; titleLength: number; description1Length: number; description2Length: number; }[]> = signal([]);
  alertStatus = new Map<string, boolean>();
  
  constructor(
    private resourcesService: ResourcesService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productSignal = this.productService.getProduct();
    
    this.highlights = computed(() => {
      const product = productSignal();
      return product ? this.resourcesService.generateHighlightText(product).map(item => ({
        title: item.title,
        titleLength: item.length
      })) : [];
    });

    console.log('highlights', this.highlights);
    

    this.snippets = computed(() => {
      const product = productSignal();
      return product ? this.resourcesService.generateSnippets(product).map(item => ({
        title: item.title,
        titleLength: item.length
      })) : [];
    });

    console.log('snippets', this.snippets);
    

    this.siteLinks = computed(() => {
      const product = productSignal();      
      return product ? this.resourcesService.generateSiteLinks(product) : [];
    });
    
  }

  generateResources(): void {
    this.product = this.productService.getProduct()();
    if (this.product) {
      this.resourcesService.generateHighlightText(this.product);
      this.resourcesService.generateSnippets(this.product);
      this.resourcesService.generateSiteLinks(this.product);
    }
  }
}