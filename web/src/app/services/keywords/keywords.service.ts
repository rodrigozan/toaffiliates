import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {
  generateKeywords(author: string, product: string): { low: string[], high: string[] } {
    const base = `${author}, ${product}`;

    const lowKeywords = [
      `${base}`,
      `${base} desconto`,
      `${base} comprar`,
      `${base} site oficial`,
      `${base} preço`,
      `comprar ${base}`,
      `curso ${base}`
    ];

    const highKeywords = [
      `${base}`,
      `${base} comprar agora`,
      `compra segura ${base}`,
      `${base} compra segura`,
      `${base} site oficial`,
      `site oficial ${base}`
    ];

    return { low: lowKeywords, high: highKeywords };
  }
}
