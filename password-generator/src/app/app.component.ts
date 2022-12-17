import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'password-generator';
  password: string = '';

  generatePassword() {
    this.password = 'PASSWORD';
  }
}
