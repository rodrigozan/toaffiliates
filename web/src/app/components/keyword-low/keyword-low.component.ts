import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-keyword-low',
  templateUrl: './keyword-low.component.html'
})
export class KeywordLowComponent {

  lowKeywords$: Observable<any>;

  constructor(private dataService: DataService) {
    this.lowKeywords$ = this.dataService.getLowKeywords();
  }

  
}