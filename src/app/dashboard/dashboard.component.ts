import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchString = "";
  products: any;

  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    
  }

  search() {
    this.authService.searchProducts(this.searchString).subscribe((res)=>{
      this.products = res;
    })
    //this.authService.login(this.email, this.password);
  }
}
