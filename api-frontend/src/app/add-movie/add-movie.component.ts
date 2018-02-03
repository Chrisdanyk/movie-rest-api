import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Movie} from '../model/movie';
import {LoginService} from '../service/login.service';
import { AddMovieService } from '../service/add-movie.service';
import { UploadImageService } from '../service/upload-image.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  private newMovie: Movie = new Movie();
  public isMovieAdded: boolean;
  private isLoggedin = false;

  constructor(private addMovieService: AddMovieService,
    private longinService: LoginService,
    private uploadImageService: UploadImageService,
    private router: Router) {}

  ngOnInit() {}

  onAddNewMovie() {
    this.addMovieService.saveMovie(this.newMovie).subscribe(
      response => {
        this.uploadImageService.uploadImage(JSON.parse(JSON.parse(JSON.stringify(response))._body).id);
        console.log(response);
        this.isMovieAdded = true;
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
