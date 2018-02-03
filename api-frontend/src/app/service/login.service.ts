import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) {}

  acceptCredential(username: string, password: string) {
    const url = 'http://localhost:8000/login';
    const encodeCredentials = btoa(username+':'+password);
    const basicHeader = 'Basic '+encodeCredentials;
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': basicHeader});
    return this.http.get(url, {headers: headers});
  }

  checkSession() {
    const url = 'http://localhost:8000/checkSession';
    const headers = new Headers({'x-auth-token': localStorage.getItem('xAuthToken')});
    return this.http.get(url, {headers: headers});
  }

  logout() {
    const url = 'http://localhost:8000/toLogout';
    const headers = new Headers({'x-auth-token': localStorage.getItem('xAuthToken')});
    return this.http.post(url, '', {headers: headers});
  }

}
