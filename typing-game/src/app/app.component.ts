import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'typing-game';
  sentence = faker.lorem.sentence();
  typed = '';
  correct = 0;
  results = 0;
  submitted = false;

  onChange(e: Event) {
    this.typed = (e.target as HTMLInputElement).value;
  }

  compare(sentenceChar: string, typedChar: string): string {
    if (!typedChar) return 'text-gray-500';
    if (typedChar === sentenceChar) {
      return 'text-green-500';
    } else {
      return 'text-red-500';
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.correct);
    this.results = Math.round((this.correct / this.sentence.length) * 100);
  }
}
