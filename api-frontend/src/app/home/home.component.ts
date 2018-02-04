import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {MatDialog, MatDialogRef} from '@angular/material';
import { LoginService } from '../service/login.service';
import { HomeService } from '../service/home.service';
import { Movie } from '../model/movie';
import { DeleteMovieService } from '../service/delete-movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private isLoggedin = false;
  private dataLoaded: boolean = false;
  private timer: any = 0;
  private movieList: Movie[];
  private selectedMovie: Movie;
  private title: string;

  constructor(private homeService: HomeService, 
    private longinService: LoginService,
    private deleteMovieservice: DeleteMovieService,
    public dialog:MatDialog, 
    private router: Router) {}

  ngOnInit() {
    this.longinService.checkSession().subscribe(
      res => {
        this.isLoggedin = true;
        this.homeService.getMovieList().subscribe(
          response => {
            this.timer = Observable.timer(1000);
            this.timer.subscribe(x => {this.dataLoaded = true;});            
            this.movieList = response.json();
            console.log(this.movieList);
            
          }, 
          error => {
            console.log(error);
          }
          );
      },
      error => {
        this.isLoggedin = false;
        this.router.navigate(['/login']);
      }
    );





    
   }

   onSelect(movie: Movie){
    this.selectedMovie = movie;
    this.router.navigate(['/movie', this.selectedMovie.id]);
    console.log(movie);
  }

  openDialog(movie:Movie) {
    let dialogRef = this.dialog.open(ConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if(result=="yes") {
          this.deleteMovieservice.deleteMovie(movie.id).subscribe(
            res => {
              console.log(res);
              location.reload();
              this.homeService.getMovieList();
            }, 
            error => {
              console.log(error);
            }
          );
        }
      }
    );
  }

  OnSearchBytitle(){
    this.homeService.searchMovie(this.title).subscribe(
      response =>{
        this.movieList = response.json();
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "home" : this.movieList
          }
        };
        this.router.navigate(['/home', navigationExtras]);
      },
      error => {
        console.log(error);
      }
    );

  }

  onLogout() {
    this.longinService.logout().subscribe(
      res => {
        location.reload();
        this.router.navigate(['/login']);
        
      },
      error => {
        console.log(error);
      }
    );
  }

}

@Component({
  selector: 'confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.html'
})
export class ConfirmDeleteDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialog>) {}
}
