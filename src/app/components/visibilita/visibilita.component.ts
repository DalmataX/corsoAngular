import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visibilita',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visibilita.component.html',
  styleUrl: './visibilita.component.css',
})
export class VisibilitaComponent {
  isShow: boolean = true;
}
