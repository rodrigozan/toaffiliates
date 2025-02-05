import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-text',
  templateUrl: './copy-text.component.html',
  styleUrls: ['./copy-text.component.css']
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