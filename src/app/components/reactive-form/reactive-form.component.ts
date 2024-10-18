// import { Component } from '@angular/core';
// import {
//   FormArray,
//   FormControl,
//   FormGroup,
//   FormsModule,
//   NgForm,
//   Validators,
// } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-reactive-form',
//   standalone: true,
//   imports: [FormsModule, CommonModule, ReactiveFormsModule],
//   templateUrl: './reactive-form.component.html',
//   styleUrl: './reactive-form.component.css',
// })
// export class ReactiveFormComponent {
//   myForm = new FormGroup({
//     nome: new FormControl('', [
//       Validators.required,
//       Validators.minLength(3),
//       Validators.maxLength(20),
//     ]),
//     cognome: new FormControl('', [Validators.required]),
//     indirizzi: new FormArray([]),
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [
//       Validators.required,
//       Validators.minLength(6),
//       Validators.maxLength(20),
//     ]),
//   });
//   get indirizzo() {
//     return this.myForm.get('indirizzi') as FormArray;
//   }
//   addIndirizzo() {
//     this.indirizzo.push(new FormControl(''));
//   }

//   sendData() {
//     console.log(this.myForm.get('nome')?.value);
//     if (this.myForm.valid) {
//       console.log(this.myForm.value);
//     } else {
//       console.error('Qualcosa e andato storto nella compilazione del Form.');
//     }
//   }
// }
