import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="/">User List</a></li>
      <li><a routerLink="/movie">Search Movie</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>

  `,

})
export class AppComponent  {  }
