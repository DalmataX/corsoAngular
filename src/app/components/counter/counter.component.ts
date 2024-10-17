import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count: number = 0;

  btnAumenta() {
    this.count++;
  }

  btnDiminuisci() {
    if (this.count >= 1) {
      this.count--;
    } else {
      console.log('Non puoi scendere sotto lo zero!');
    }
  }

  btnReset() {
    this.count = 0;
  }
}
