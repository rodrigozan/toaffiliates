import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-keyword-high',
  standalone: true,
  imports: [],
  templateUrl: './keyword-high.component.html',
  styleUrl: './keyword-high.component.scss'
})
export class KeywordHighComponent {
  highKeywords$: Observable<any>;

  constructor(private dataService: DataService) {
    this.highKeywords$ = this.dataService.getHighKeywords();
  }
}
