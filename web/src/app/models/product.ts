export interface Product {
    id: number;
    name: string;
    basePrice: number;
    finalPrice: number;
    discountPercentage: number;
    keywords: string[];
    bonuses: string[];
  }