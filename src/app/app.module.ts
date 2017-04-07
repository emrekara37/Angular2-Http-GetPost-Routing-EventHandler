import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import {UserComponent} from './components/user.component';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import{MovieComponent} from './components/movie.component';
const appRoutes:Routes= [
  {
    path:'',component:UserComponent
  },
  {
    path:'movie',component:MovieComponent
  }
];
@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule ,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,UserComponent ,MovieComponent],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
