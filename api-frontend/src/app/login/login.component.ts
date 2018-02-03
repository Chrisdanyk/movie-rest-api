import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credentials = {'username': '', 'password': ''};
  private isLoggedin = false;
  private loginError = false;

  constructor(private longinService: LoginService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.longinService.acceptCredential(this.credentials.username, this.credentials.password)
      .subscribe(
        response => {
          console.log(response);
          localStorage.setItem('xAuthToken', response.json().token);
          this.isLoggedin = true;
          this.router.navigate(['/home']);
          location.reload();
        },
        error => {
          console.log(error);
          this.loginError = true;
        }
      );
  }

}


