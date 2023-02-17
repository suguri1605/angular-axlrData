import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email = "";
  name = "";
  location = "";
  password = "";
  confirmPassword = "";

  constructor(private authService: AuthenticationService) {}

  onSubmit() {
    this.authService.signup(this.name, this.location, this.email, this.password);
    console.log('Submitted:', this.email, this.password, this.confirmPassword);
  }

  ngOnInit(): void {
  }

}
