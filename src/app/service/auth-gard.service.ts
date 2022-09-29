import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(
    public authenticationService:AuthenticationService,
    public router:Router
    ) { }
  canActivate(): boolean {
    return this.authenticationService.isAuthenticated();
  }
}