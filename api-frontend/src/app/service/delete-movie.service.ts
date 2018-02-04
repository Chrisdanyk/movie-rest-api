import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Movie } from '../model/movie';

@Injectable()
export class DeleteMovieService {

  constructor(private http:Http) {}

  deleteMovie(movieId: number) {
    const url = 'http://localhost:8000/movie/remove?movieId='+movieId;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, movieId, {headers: headers});
  }

}
