import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild
} from '@angular/router';
import {
  Injectable
} from '@angular/core';
import {
  AuthenticationService
} from '../services/AuthenticationService';
import {
  Observable
} from 'rxjs';
import {
  SessionManager
} from './SessionManager';
import { Popup } from './Popup';

@Injectable({
  providedIn: 'root'
})
export class Guardian implements CanActivate, CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

  constructor(private sessionManager:SessionManager, private authService: AuthenticationService, private popup:Popup, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable < boolean > | Promise < boolean > | boolean {
    if(this.sessionManager.get('token') === null){
      this.popup.showMessage("Votre session a expirée, veuillez vous reconnecter")
      this.router.navigateByUrl("login");
      return false;
    }
    
    this.popup.showLoaderCustom("Chargement...");
    if(this.sessionManager.get('token') === null){
      this.popup.showMessage("Votre session a expirée, veuillez vous reconnecter")
      return false;
    }
    return this.authService.checkToken().toPromise().then(() => {
      this.popup.hideLoader();
      return true;
    }).catch((err:Response) => {
      console.log(err.status)
      if(err.status === 401){
        this.popup.showMessage("Votre session a expirée, veuillez vous reconnecter")
      }
      else{
      this.popup.showMessage("Une erreur est survenue, veuillez réessayer plus tard")
      }
      this.popup.hideLoader();
      this.router.navigateByUrl("login");
      return false;
    });
    
  }
}