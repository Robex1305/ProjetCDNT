import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/AuthenticationService';
import { Observable } from 'rxjs';
import { SessionManager } from './SessionManager';

@Injectable({
    providedIn: 'root'
})
export class Guardian implements CanActivate {

  constructor(public sessionManager:SessionManager, private router: Router) {
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    let ok = this.sessionManager.checkToken();
    if(ok){
      return true;
    }
    else{
      this.router.navigateByUrl("login")
      return false;
    }
  }
}