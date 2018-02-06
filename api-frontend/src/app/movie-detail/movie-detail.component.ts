import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieDetailService } from '../service/movie-detail.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  private isLoggedin: boolean = false;
  private movie: Movie = new Movie();
  private movieId: number;

  constructor(private longinService: LoginService,
    private route: ActivatedRoute,
    private movieDetailsService: MovieDetailService,
    private router: Router) {}

    onEditMovie(movie: Movie){
      this.router.navigate(['movie/update', this.movie.id]);
    }

  ngOnInit() {
    this.longinService.checkSession().subscribe(
      res => {
    this.route.params.forEach((params: Params) => {
      this.movieId = Number.parseInt(params['id']);
    });
    this.movieDetailsService.getMovie(this.movieId).subscribe(
      response => {
        this.movie = response.json();
        console.log(this.movie);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    this.isLoggedin = false;
    this.router.navigate(['/']);
  });
}
}
