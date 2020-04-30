import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  uri: string = 'https://localhost:5001/api';
  token: string;
  ocurrioError: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: string, password: string) {
    this.http.post(this.uri + '/login', { usuario: usuario, password: password })
      .subscribe((resp: any) => {
        this.router.navigate(['order']);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', resp.usuario);
        this.ocurrioError = false;
      }, error => {
        this.ocurrioError = true;
        console.log('Ocurrió un error:' + error);
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  public get errorLogIn(): boolean {
    return this.ocurrioError;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
