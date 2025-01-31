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
}