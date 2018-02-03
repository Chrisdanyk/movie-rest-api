import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private longinService: LoginService, private router: Router) {}

  ngOnInit() {}

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
