import { Component, OnInit } from '@angular/core';
import { map, catchError, throwError } from 'rxjs';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';

  constructor(public authService: AuthenticationService) {}
  isAuthenticated: any;
  ngOnInit(){
    this.authService.isAuthenticated().subscribe(
      data => {console.log(data) ; this.isAuthenticated = true},
      err => {console.log(err); this.isAuthenticated = false },
      () => console.log('yay')
    );
  }

  
  
  logout() {
    this.authService.logout();
  }
}
