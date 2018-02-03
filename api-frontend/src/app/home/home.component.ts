import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../service/login.service';
import { HomeService } from '../service/home.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private movieList: Movie[];

  constructor(private homeService: HomeService, 
    private longinService: LoginService, 
    private router: Router) {}

  ngOnInit() {
    this.homeService.getMovieList().subscribe(
      response => {
        this.movieList = response.json();
        console.log(this.movieList);
        // this.timer = Observable.timer(1000);
        // this.timer.subscribe(x => {this.dataLoaded = true;});
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
