import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio-1',
  standalone: true,
  imports: [],
  templateUrl: './esercizio-1.component.html',
  styleUrl: './esercizio-1.component.css',
})
export class Esercizio1Component {
  nome: string = 'Aleksander';
  cognome: string = 'Pavlov';
  eta: number = 19;
  hobby: string = 'Videogiochi';
}
