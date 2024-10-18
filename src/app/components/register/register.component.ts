import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  myForm = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    cognome: new FormControl('', [Validators.required]),
    telefono: new FormArray([]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  get telefono() {
    return this.myForm.get('telefono') as FormArray;
  }

  addTelefono() {
    this.telefono.push(
      new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ])
    );
  }

  removeTelefono(index: number) {
    this.telefono.removeAt(index);
  }

  sendData() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.error('Qualcosa è andato storto nella compilazione del Form.');
    }
  }
}
