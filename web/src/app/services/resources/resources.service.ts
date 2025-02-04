import { Injectable } from '@angular/core';

import { iProduct } from '../../interfaces/iProduct';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor() { }

  generateHighlightText(product: iProduct) {
    const highlights = [
      {
        title: `${product.maxDiscountPercentage}% de desconto`,
        length: `${product.maxDiscountPercentage}% de desconto`.length
      },
      {
        title: `de R$${product.fullPrice} por R$${product.anchorPrice}`,
        length: `de R$${product.fullPrice} por R$${product.anchorPrice}`.length
      },
      {
        title: `${product.bonusAmount} Bônus Exclusivos`,
        length: `${product.bonusAmount} Bônus Exclusivos`.length
      },
      {
        title: `Só Hoje: De R$${product.anchorPrice} Por R$${product.fullPrice}`,
        length: `Só Hoje: De R$${product.anchorPrice} Por R$${product.fullPrice}`.length
      },
      {
        title: `Curso Online Completo`,
        length: `Curso Online Completo`.length
      },
      {
        title: `Passo a Passo do Zero`,
        length: `Passo a Passo do Zero`.length
      },
      {
        title: `${product.maxDiscountPercentage}% Off Na Compra Hoje`,
        length: `${product.maxDiscountPercentage}% Off Na Compra Hoje`.length
      },
      {
        title: `Compre com Garantia Total`,
        length: `Compre com Garantia Total`.length
      },
      {
        title: `Com Desconto de R$ ${product.maxDiscountAmount}`,
        length: `Com Desconto de R$ ${product.maxDiscountAmount}`.length
      },
      {
        title: `${product.keyword} Em Oferta`,
        length: `${product.keyword} Em Oferta`.length
      },
      {
        title: `Faça Sua Inscrição Agora`,
        length: `Faça Sua Inscrição Agora`.length
      },
      {
        title: `Inscreva-se com Desconto`,
        length: `Inscreva-se com Desconto`.length
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
        title: `Com ${product.bonusAmount}  Bônus Exclusivos`,
        length: `Com ${product.bonusAmount}  Bônus Exclusivos`.length
      },
      {
        title: `Compre com Garantia Total`,
        length: `Compre com Garantia Total`.length
      },
      {
        title: `Só Hoje: De R$${product.anchorPrice} Por R$${product.fullPrice}`,
        length: `Só Hoje: De R$${product.anchorPrice} Por R$${product.fullPrice}`.length
      }
    ];
    return snippets;
  }

  generateSiteLinks(product: iProduct) {
    const siteLinks = [
      {
        title: `Compre Com ${product.maxDiscountPercentage}% Off Hoje`,
        description1: `Por Apenas ${product.maxAnchorNumber}x R$ ${(product.anchorPrice / product.maxAnchorNumber).toFixed(2)} no Cartão`,
        description2: `Faça Sua Inscrição na Promoção`,
        url: product.trackingUrl,
        titleLength: `Compre Com ${product.maxDiscountPercentage}% Off Hoje`.length,
        description1Length: `Por Apenas ${product.maxAnchorNumber}x R$ ${(product.anchorPrice / product.maxAnchorNumber).toFixed(2)} no Cartão`.length,
        description2Length: `Faça Sua Inscrição na Promoção`.length
      },
      {
        title: `${product.warranty} Dias De Garantia Total`,
        description1: `Compre com ${product.warranty} Dias de Garantia Total`,
        description2: `Satisfação ou Seu Dinheiro de Volta`,
        url: product.adUrl,
        titleLength: `${product.warranty} Dias De Garantia Total`.length,
        description1Length: `Compre com ${product.warranty} Dias de Garantia Total`.length,
        description2Length: `Satisfação ou Seu Dinheiro de Volta`.length
      },
      {
        title: `Adquira Hoje Ganhe Bônus`,
        description1: `Desconto + ${product.bonusAmount} Bônus Exclusivos`,
        description2: `${product.maxDiscountPercentage}% Off Hoje + Conteúdo Exclusivo`,
        url: product.adUrl,
        titleLength: `Adquira Hoje Ganhe Bônus`.length,
        description1Length: `Desconto + ${product.bonusAmount} Bônus Exclusivos`.length,
        description2Length: `${product.maxDiscountPercentage}% Off Hoje + Conteúdo Exclusivo`.length
      },
      {
        title: `Economize R$ ${product.maxDiscountAmount} na Compra`,
        description1: `Desconto Exclusivo na Compra Hoje`,
        description2: `Inscreva-se na Promoção Agora`,
        url: product.adUrl,
        titleLength: `Economize R$ ${product.maxDiscountAmount} na Compra`.length,
        description1Length: `Desconto Exclusivo na Compra Hoje`.length,
        description2Length: `Inscreva-se na Promoção Agora`.length
      }
    ];

    return siteLinks;
  }
}
