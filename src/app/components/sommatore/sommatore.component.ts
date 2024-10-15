import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sommatore',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sommatore.component.html',
  styleUrl: './sommatore.component.css',
})
export class SommatoreComponent {
  num1: number = 0;
  num2: number = 0;
  risultato: number = 0;

  calcolaSomma() {
    this.risultato = this.num1 + this.num2;
  }
}
