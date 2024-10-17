import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caricamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caricamento.component.html',
  styleUrl: './caricamento.component.css',
})
export class CaricamentoComponent {
  isLoading: boolean = true;

  ngOnInit() {
    this.startLoading();
  }

  startLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log('Caricamento completato!');
    }, 3000);
  }

  restartLoading() {
    this.startLoading();
  }
}
