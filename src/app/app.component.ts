import { Component } from '@angular/core';

export class Hero {
  private id: number;
  private name: string;

  public setId(id: number) {
    this.id = id;
  }
  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public getId() {
    return this.id;
  }
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
        <input [(ngModel)]="hero.setName(name)" placeholder="name">
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of GHeroes';
  hero : Hero;

  cunstructor() {
    this.hero = new Hero();
    this.hero.setId(1);
    this.hero.setName("Super hero");
  }
}
//TODO разобрать эту хрень
