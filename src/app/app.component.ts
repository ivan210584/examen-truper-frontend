import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'examentruper';

  constructor(public authService: AuthService) {
  }

  ngOnInit() { }

  logout() {
    this.authService.logout()
    console.log("you are logging out")
  }
}
