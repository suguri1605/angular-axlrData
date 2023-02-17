import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router: Router, private _http: HttpClient) {}
  baseDomainUrl = 'http://localhost:3001/'

  login(email: string, password: string) {
    return this._http.post(`${this.baseDomainUrl}api/login`, { email, password }).subscribe(
      (res: any)=>{
        localStorage.setItem('token', res.token);
        console.log(res);
        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload();
        });;
      },
      (error: any) =>{
        if(error.status == 400){
          alert(error.error.message);
        }
      }
    );
  }
  signup(name: string, location: string, email: string, password: string){
    return this._http.post(`${this.baseDomainUrl}api/signup`, { name, location, email, password }).subscribe(
      (res: any)=>{
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload();
        });;
      },
      (error: any) =>{
        if(error.status == 400){
          alert(error.error.message);
        }
      }
    );;
  }
  isAuthenticated(){
    return this._http.get(`${this.baseDomainUrl}api/protected`)
  }
  searchProducts(q: String){
    return this._http.post(`${this.baseDomainUrl}api/products/search`, { q });
  }
  logout(){
    //remove all the access token;
    localStorage.clear();
    location.reload();
  }

}
