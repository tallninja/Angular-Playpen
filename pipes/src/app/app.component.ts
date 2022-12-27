import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  lowercaseText: string = 'Uppercase Text';
  uppercaseText: string = 'Lowercase Text';
  plaincaseText: string = 'Plain Text';
  fullText: string = 'Sliced Text';
  amount: number = 0;
  date: Date = new Date();
  decimal: number = 0;
  speed: number = 0;

  onLowerChange(e: Event) {
    this.lowercaseText = (e.target as HTMLInputElement).value;
  }

  onUpperChange(e: Event) {
    this.uppercaseText = (e.target as HTMLInputElement).value;
  }

  onPlainChange(e: Event) {
    this.plaincaseText = (e.target as HTMLInputElement).value;
  }

  onFullChange(e: Event) {
    this.fullText = (e.target as HTMLInputElement).value;
  }

  onAmountChange(e: Event) {
    this.amount = parseFloat((e.target as HTMLInputElement).value);
  }

  onDateChange(e: Event) {
    this.date = new Date((e.target as HTMLInputElement).value);
  }

  onDecimalChange(e: Event) {
    this.decimal = parseFloat((e.target as HTMLInputElement).value);
  }

  onSpeedChange(e: Event) {
    this.speed = parseFloat((e.target as HTMLInputElement).value);
  }
}
