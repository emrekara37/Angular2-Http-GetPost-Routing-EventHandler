import { Component } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers:[UserService]
})
export class UserComponent  {

    users:Users[];
    deleteUsers:Users[] = [];
    movie:MovieModel;
    constructor(private userService: UserService){

      this.userService.getUsers().subscribe(p=>{

         this.users=p;
      })
    }

  deleteUser(i:any,user:any){

    this.users.splice(i,1);
    this.deleteUsers.push(user);


  }
  getMovieData(movieName:any){

    this.userService.getMovie(movieName.value).subscribe(movie=>{
      this.movie=movie;
      console.log(movie);
    })
  }
  addUser(i:any,user:any){
    this.deleteUsers.splice(i,1);
    this.users.push(user);
  }

 }
 interface MovieModel{
   Title:string;
   Year:number;
   Poster:string;
 }
 interface Users{
   id:number;
   email:string;
   name:string;
   phone:string;
   username:string;
   website:string;
 }
