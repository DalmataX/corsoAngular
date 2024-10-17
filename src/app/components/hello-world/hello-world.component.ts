import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
})
export class HelloWorldComponent {
  @Input() datoDalParent: string = '';
  message: string = 'Hello world';
  name: string = '';
  isDisabled: boolean = false;
  count: number = 0;
  isShow: boolean = true;
  fruits = ['mela', 'banana', 'pera', 'mango'];
  citta = [
    { cap: 1, nome: 'Palermo' },
    { cap: 2, nome: 'Roma' },
    { cap: 3, nome: 'Napoli' },
    { cap: 4, nome: 'Bari' },
    { cap: 5, nome: 'Lucca' },
  ];

  prodotti = [
    {
      prodotto: 'coca cola',
      prezzo: '2 euro',
    },
    {
      prodotto: 'spazzolino',
      prezzo: '1 euro',
    },
    {
      prodotto: 'carta igienica',
      prezzo: '5 euro',
    },
    {
      prodotto: 'pannolini',
      prezzo: '16 euro',
    },
    {
      prodotto: 'carne',
      prezzo: '5 euro',
    },
    {
      prodotto: 'acqua',
      prezzo: '2 euro',
    },
    {
      prodotto: 'gelatini',
      prezzo: '5 euro',
    },
    {
      prodotto: 'birra',
      prezzo: '4 euro',
    },
  ];

  ngOnChange() {
    console.log('sono stato modificato');
  }
  saluta() {
    alert('Ciao compa!');
  }
}
