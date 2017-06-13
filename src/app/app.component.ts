import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1><h2>{{hero}}</h2>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Tour of GHeroes';
  public hero = 'Windstorm';
}
