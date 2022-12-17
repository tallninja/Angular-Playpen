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

  setLength(e: Event) {
    const value = parseInt((e.target as HTMLInputElement).value);
    if (!isNaN(value)) {
      this.length = value;
    }
    console.info(this.length);
  }

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
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*(){}[]?';
    let validChars = '';
    let generatedPassword = '';

    if (this.letters) validChars += letters;
    if (this.numbers) validChars += numbers;
    if (this.symbols) validChars += symbols;

    for (let i = 1; i <= this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
