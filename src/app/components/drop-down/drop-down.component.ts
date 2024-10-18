import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css',
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
