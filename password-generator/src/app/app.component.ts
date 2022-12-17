import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'password-generator';
  length: number = 8;
  letters: boolean = true;
  numbers: boolean = true;
  symbols: boolean = false;
  password: string = '';

  setLength(e: Event) {}

  setLetters() {
    this.letters = !this.letters;
  }

  setNumbers() {
    this.numbers = !this.numbers;
  }

  setSymbols() {
    this.symbols = !this.symbols;
  }

  generatePassword() {
    this.password = 'PASSWORD';
    console.info(this.letters);
    console.info(this.numbers);
    console.info(this.symbols);
  }
}
