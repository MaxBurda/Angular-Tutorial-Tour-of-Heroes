import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
    <div class="container">
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
}
//TODO разобрать эту хрень
