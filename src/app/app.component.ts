import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details! </h2>
    <div><label> id: </label> {{hero.id}} </div>
    <div>
      <label> name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'Tour of GHeroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
