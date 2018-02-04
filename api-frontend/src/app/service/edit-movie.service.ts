import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Movie } from '../model/movie';

@Injectable()
export class EditMovieService {

  constructor(private http: Http) {}

  editMovie(movie: Movie) {
    const url = 'http://localhost:8000/movie/update';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, JSON.stringify(movie), { headers: headers });
  }

}
