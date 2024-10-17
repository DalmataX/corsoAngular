import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  paesi = [
    { nome: 'Italia' },
    { nome: 'Austria' },
    { nome: 'Francia' },
    { nome: 'Svizzera' },
    { nome: 'Slovenia' },
  ];

  paeseScelto: string = '';
}
