import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esercizio-registrazione',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './esercizio-registrazione.component.html',
  styleUrl: './esercizio-registrazione.component.css',
})
export class EsercizioRegistrazioneComponent {
  utente = {
    username: '',
    email: '',
    password: '',
  };
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.utente);
    } else {
      console.log('Il form non e valido');
    }
    console.log(this.utente);
  }
}
