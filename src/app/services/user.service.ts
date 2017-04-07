import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getUsers(){
       return this.http.get("http://jsonplaceholder.typicode.com/users").map(res=>res.json());
    }
    getMovie(movieName:any){
      return this.http.get("http://www.omdbapi.com/?t="+movieName).map(res=>res.json());
    }

}
