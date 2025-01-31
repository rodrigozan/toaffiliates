import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data/data.service';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  resources$: Observable<string[]>;

  constructor(private dataService: DataService) {
    this.resources$ = this.dataService.getResources();
  }

  // Copia um recurso para a área de transferência
  copyToClipboard(resource: string) {
    navigator.clipboard.writeText(resource).then(() => {
      alert('Recurso copiado para a área de transferência!');
    });
  }

  // Adiciona um novo recurso
  addResource(newResource: string) {
    if (newResource.trim()) {
      this.dataService.updateResources([...this.dataService.currentResources, newResource]);
    }
  }
}