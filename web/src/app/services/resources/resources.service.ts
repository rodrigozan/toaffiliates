import { Injectable } from '@angular/core';
import { iProduct } from '../../interfaces/iProduct';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private discountText = '% de desconto';
  private priceText = 'de R$';
  private toText = ' por R$';
  private bonusText = ' Bônus Exclusivos';
  private todayText = 'Só Hoje: De R$';
  private completeCourseText = 'Curso Online Completo';
  private stepByStepText = 'Passo a Passo do Zero';
  private offTodayText = '% Off Na Compra Hoje';
  private totalWarrantyText = 'Compre com Garantia Total';
  private discountAmountText = 'Com Desconto de R$ ';
  private inOfferText = ' Em Oferta';
  private signUpNowText = 'Faça Sua Inscrição Agora';
  private signUpWithDiscountText = 'Inscreva-se com Desconto';
  private offToday = '% Off Hoje';
  private signUpPromotionText = 'Faça Sua Inscrição na Promoção';
  private satisfactionText = 'Satisfação ou Seu Dinheiro de Volta';
  private exclusiveContentText = 'Conteúdo Exclusivo';
  private exclusiveDiscountText = 'Desconto Exclusivo na Compra Hoje';
  private signUpPromotionNowText = 'Inscreva-se na Promoção Agora';

  constructor() { }

  generateHighlightText(product: iProduct) {
    const highlights = [
      {
        title: `${Math.trunc(product.maxDiscountPercentage)}${this.discountText}`,
        length: `${Math.trunc(product.maxDiscountPercentage)}${this.discountText}`.length
      },
      {
        title: `${this.priceText}${product.fullPrice}${this.toText}${product.maxDiscount}`,
        length: `${this.priceText}${product.fullPrice}${this.toText}${product.maxDiscount}`.length
      },
      {
        title: `${product.bonusAmount}${this.bonusText}`,
        length: `${product.bonusAmount}${this.bonusText}`.length
      },
      {
        title: `${this.todayText}${product.fullPrice}${this.toText}${product.maxDiscount}`,
        length: `${this.todayText}${product.fullPrice}${this.toText}${product.maxDiscount}`.length
      },
      {
        title: this.completeCourseText,
        length: this.completeCourseText.length
      },
      {
        title: this.stepByStepText,
        length: this.stepByStepText.length
      },
      {
        title: `${Math.trunc(product.maxDiscountPercentage)}${this.offTodayText}`,
        length: `${Math.trunc(product.maxDiscountPercentage)}${this.offTodayText}`.length
      },
      {
        title: this.totalWarrantyText,
        length: this.totalWarrantyText.length
      },
      {
        title: `${this.discountAmountText}${product.maxDiscountAmount}`,
        length: `${this.discountAmountText}${product.maxDiscountAmount}`.length
      },
      {
        title: `${product.keyword}${this.inOfferText}`,
        length: `${product.keyword}${this.inOfferText}`.length
      },
      {
        title: this.signUpNowText,
        length: this.signUpNowText.length
      },
      {
        title: this.signUpWithDiscountText,
        length: this.signUpWithDiscountText.length
      }
    ];

    return highlights;
  }

  generateSnippets(product: iProduct) {
    const snippets = [
      {
        title: `Hoje Por ${product.maxAnchorNumber}x R$ ${(product.anchorPrice / product.maxAnchorNumber).toFixed(2)}`,
        length: `Hoje Por ${product.maxAnchorNumber}x R$ ${(product.anchorPrice / product.maxAnchorNumber).toFixed(2)}`.length
      },
      {
        title: `Com ${product.bonusAmount}${this.bonusText}`,
        length: `Com ${product.bonusAmount}${this.bonusText}`.length
      },
      {
        title: this.totalWarrantyText,
        length: this.totalWarrantyText.length
      },
      {
        title: `${this.todayText}${product.fullPrice}${this.toText}${product.maxDiscount}`,
        length: `${this.todayText}${product.fullPrice}${this.toText}${product.maxDiscount}`.length
      }
    ];
    return snippets;
  }

  generateSiteLinks(product: iProduct) {
    const siteLinks = [
      {
        title: `Compre Com ${Math.trunc(product.maxDiscountPercentage)}${this.offToday}`,
        description1: `Por Apenas ${product.maxAnchorNumber}x R$ ${(product.anchorPrice / product.maxAnchorNumber).toFixed(2)} no Cartão`,
        description2: this.signUpPromotionText,
        url: product.trackingUrl,
        titleLength: `Compre Com ${Math.trunc(product.maxDiscountPercentage)}${this.offToday}`.length,
        description1Length: `Por Apenas ${product.maxAnchorNumber}x R$ ${(product.maxDiscount / product.maxAnchorNumber).toFixed(2)} no Cartão`.length,
        description2Length: this.signUpPromotionText.length
      },
      {
        title: `${product.warranty} Dias De Garantia Total`,
        description1: `Compre com ${product.warranty} Dias de Garantia Total`,
        description2: this.satisfactionText,
        url: product.trackingUrl,
        titleLength: `${product.warranty} Dias De Garantia Total`.length,
        description1Length: `Compre com ${product.warranty} Dias de Garantia Total`.length,
        description2Length: this.satisfactionText.length
      },
      {
        title: `Adquira Hoje Ganhe Bônus`,
        description1: `Desconto + ${product.bonusAmount}${this.bonusText}`,
        description2: `${Math.trunc(product.maxDiscountPercentage)}${this.offToday} + ${this.exclusiveContentText}`,
        url: product.trackingUrl,
        titleLength: `Adquira Hoje Ganhe Bônus`.length,
        description1Length: `Desconto + ${product.bonusAmount}${this.bonusText}`.length,
        description2Length: `${Math.trunc(product.maxDiscountPercentage)}${this.offToday} + ${this.exclusiveContentText}`.length
      },
      {
        title: `Economize R$ ${product.maxDiscountAmount} na Compra`,
        description1: this.exclusiveDiscountText,
        description2: this.signUpPromotionNowText,
        url: product.trackingUrl,
        titleLength: `Economize R$ ${product.maxDiscountAmount} na Compra`.length,
        description1Length: this.exclusiveDiscountText.length,
        description2Length: this.signUpPromotionNowText.length
      }
    ];

    return siteLinks;
  }
}
