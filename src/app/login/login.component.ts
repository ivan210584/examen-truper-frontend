import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario = '';
  password = '';

  constructor(public authService: AuthService) {

  }
  Login() {
    this.authService.login(this.usuario, this.password)
    console.log("you are logging in")
  }

  ngOnInit() { }
}
