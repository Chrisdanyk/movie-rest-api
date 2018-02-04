import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HomeService {

  constructor(private http:Http) {}

  getMovieList() {
  	let url = "http://localhost:8000/movie/movieList";
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});
  }

  searchMovie(title: string) {
  	let url = "http://localhost:8000/movie/search?title="+title;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});
  }

}
