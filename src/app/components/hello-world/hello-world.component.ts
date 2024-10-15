import { Component } from '@angular/core';
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
  message: string = 'Hello world';
  name: string = '';
  isDisabled: boolean = false;
  count: number = 0;
  isShow: boolean = true;

  ngOnChange() {
    console.log('sono stato modificato');
  }
  saluta() {
    alert('Ciao compa!');
  }
}
