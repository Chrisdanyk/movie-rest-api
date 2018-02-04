import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class MovieDetailService {

  constructor(private http: Http) {}

  getMovie(id: number) {
  	let url = "http://localhost:8000/movie/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});
  }

}
