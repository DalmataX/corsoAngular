import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-elencopersone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './elencopersone.component.html',
  styleUrl: './elencopersone.component.css',
})
export class ElencopersoneComponent {
  persone = [
    { eta: 19, nome: 'Luca' },
    { eta: 18, nome: 'Marcello' },
    { eta: 21, nome: 'Sandro' },
    { eta: 24, nome: 'Mark' },
    { eta: 19, nome: 'Vittorio' },
  ];
}
