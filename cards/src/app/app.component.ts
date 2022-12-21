import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  posts = [
    { title: 'Lorem Ipsum', image: 'assets/image1.jpg' },
    { title: 'Hello World', image: 'assets/image2.jpg' },
    { title: 'Love Life', image: 'assets/image3.jpg' },
  ];
}
