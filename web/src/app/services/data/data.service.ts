import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private lowKeywords = new BehaviorSubject<string[]>(['urgente', 'promoção relâmpago', 'oferta última hora']);
  private highKeywords = new BehaviorSubject<string[]>(['comprar agora', 'desconto imediato', 'oferta exclusiva']);
  private resources = new BehaviorSubject<string[]>(['Garantia de 7 dias', 'Suporte 24/7', 'Acesso vitalício']);

  getLowKeywords() {
    return this.lowKeywords.asObservable();
  }

  getHighKeywords() {
    return this.highKeywords.asObservable();
  }

  getResources() {
    return this.resources.asObservable();
  }

  get currentResources(): string[] {
    return this.resources.getValue();
  }

  updateKeywords(newKeywords: string[], type: 'low' | 'high') {
    if (type === 'low') {
      this.lowKeywords.next(newKeywords);
    } else {
      this.highKeywords.next(newKeywords);
    }
  }

  updateResources(newResources: string[]) {
    this.resources.next(newResources);
  }

  generateTitles(productName: string, mainKeyword: string, callToAction: string): string[] {
    const titles = [
      `[Promoção] ${productName} - ${mainKeyword}`,
      `${productName} | ${mainKeyword} | ${callToAction}`,
      `Compre ${productName} - ${mainKeyword} - ${callToAction}`,
      `${productName}: ${mainKeyword} - ${callToAction}`,
      `Oferta Especial: ${productName} - ${mainKeyword}`
    ];

    return titles;
  }

  generateDescriptions(productName: string, mainKeyword: string, benefits: string, callToAction: string): string[] {
    const descriptions = [
      `Descubra ${productName} - ${mainKeyword}. ${benefits}. ${callToAction}.`,
      `Aproveite ${productName} - ${mainKeyword}. ${benefits}. ${callToAction}.`,
      `Compre ${productName} - ${mainKeyword}. ${benefits}. ${callToAction}.`,
      `${productName} - ${mainKeyword}. ${benefits}. ${callToAction}.`,
      `Oferta Especial: ${productName} - ${mainKeyword}. ${benefits}. ${callToAction}.`
    ];

    return descriptions;
  }
}