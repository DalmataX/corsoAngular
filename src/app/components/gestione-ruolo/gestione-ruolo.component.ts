import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestione-ruolo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestione-ruolo.component.html',
  styleUrl: './gestione-ruolo.component.css',
})
export class GestioneRuoloComponent {
  ruolo: string = '';
}
