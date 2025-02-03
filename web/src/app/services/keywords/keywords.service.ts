import { Injectable } from '@angular/core';

import { iProduct } from '../../interfaces/iProduct';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {
  generateKeywords(product: iProduct): { low: string[], high: string[] } {
    const base = `${product.keyword}`;
    const discountText = `${product.maxDiscountPercentage}% de desconto`;
    const priceText = `de R$${product.fullPrice} por R$${product.anchorPrice}`;

    const lowKeywords = [
      `${base}`,
      `${base} Desconto`,
      `${base} Comprar`,
      `${base} Site Oficial`,
      `${base} Preço`,
      `Comprar ${base}`,
      `Curso ${base}`,
      `${base} ${discountText}`,
      `${discountText}`,
      `${base} ${priceText}`,
      `${priceText}`,
      `${base} ${product.bonusAmount} Bônus`,
      `${base} ${product.warranty} Dias De Garantia`
    ];

    const highKeywords = [
      `${base}`,
      `${base} Comprar Agora`,
      `Compre Agora`,
      `Compra Segura ${base}`,
      `Compra Segura`,
      `${base} Compra Segura`,
      `${base} Site Oficial`,
      `Site Oficial`,
      `Site Oficial ${base}`,
      `Preço Especial`,
      `Preço Especial ${base}`,
      `${base} ${discountText} Oferta Especial`,
      `${discountText} Oferta Especial`,
      `Compre ${base} Em Até ${product.maxAnchorNumber} Vezes Sem Juros`,
      `Em Até ${product.maxAnchorNumber} Vezes Sem Juros`
    ];

    return { low: lowKeywords, high: highKeywords };
  }
}
