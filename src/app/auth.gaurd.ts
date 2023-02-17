import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated().subscribe(
        data => {console.log(data); return true},
        err => {console.log(err);  this.router.navigate(['/login']); return false },
        () => console.log('yay')
    );

    if (!isAuthenticated) {
        this.router.navigate(['/login']);
    }

    return true;
  }

}

