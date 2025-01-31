import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data/data.service';

@Component({  
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  standalone: true,  
  imports: [],
})
export class ResourcesComponent {
  resources$: Observable<any>;

  constructor(private dataService: DataService) {
    this.resources$ = this.dataService.getResources();
  }
}