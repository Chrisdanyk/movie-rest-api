import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../model/movie';
import { EditMovieService } from '../service/edit-movie.service';
import { LoginService } from '../service/login.service';
import { MovieDetailService } from '../service/movie-detail.service';
import { AddMovieService } from '../service/add-movie.service';
import { UploadImageService } from '../service/upload-image.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  private movieId: number;
  private movie: Movie = new Movie();

  constructor(private editMovieService: EditMovieService,
    private router: Router,
    private route: ActivatedRoute,
    private longinService: LoginService,
    private movieDetailService: MovieDetailService,
    private addComputerService: AddMovieService,
    private uploadImageService: UploadImageService) {}

    onSaveMovie() {
      this.editMovieService.editMovie(this.movie).subscribe(
        response => {
          this.uploadImageService.updateImage(JSON.parse(JSON.parse(JSON.stringify(response))._body).id);
          console.log(response);
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
        }
      );
    }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.movieId = Number.parseInt(params['id']);
    });
    this.movieDetailService.getMovie(this.movieId).subscribe(
      response => {
        this.movie = response.json();
        console.log(this.movie);
      },
      error => {
        console.log(error);
      }
    );
  }

}
