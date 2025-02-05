import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-copy-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './copy-text.component.html',
  styleUrls: ['./copy-text.component.scss']
})
export class CopyTextComponent {
  @Input() text: string = '';
  alertStatus = false;

  copyText() {
    navigator.clipboard.writeText(this.text).then(() => {
      this.alertStatus = true;
      setTimeout(() => {
        this.alertStatus = false;
      }, 3000);
    }).catch(err => {
      console.error('Erro ao copiar texto: ', err);
    });
  }
}