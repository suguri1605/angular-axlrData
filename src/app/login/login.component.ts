import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";

  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    
  }

  login() {
    this.authService.login(this.email, this.password);
  }

}
