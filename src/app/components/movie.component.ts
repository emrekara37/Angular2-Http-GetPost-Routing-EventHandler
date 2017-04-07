import { Component } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  moduleId:module.id,
  selector: 'movie',
  templateUrl:'movie.component.html',
  providers:[UserService]
})
export class MovieComponent  {


  movie:MovieModel;
  movieText:string;
  constructor(private userService: UserService){}


  getMovieData(movieName:any){

    this.userService.getMovie(movieName.value).subscribe(movie=>{
      this.movie=movie;

    });
  }

}
interface MovieModel{
  Title:string;
  Year:number;
  Poster:string;
}
