import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthenticationService
} from 'src/services/AuthenticationService';
import {
  Router
} from '@angular/router';
import {
  Popup
} from 'src/util/Popup';
import {
  Utilisateur
} from 'src/models/classes/Utilisateur';
import {
  Guardian
} from 'src/util/Guardian';
import {
  createHash
} from 'crypto';
import {
  SessionManager
} from 'src/util/SessionManager';

@Component({
  selector: 'app-page-log-in',
  templateUrl: './page-log-in.page.html',
  styleUrls: ['./page-log-in.page.scss']
})
export class PageLogInPage implements OnInit {

  public username: string;
  public password: string;

  public constructor(public authService: AuthenticationService, public router: Router, public sessionManager: SessionManager, public popup: Popup) {}

  ngOnInit() {
    this.authService.checkToken().subscribe(res => {
      //Deja connecté, on redirige
      this.router.navigateByUrl("home");
    }, err => {
      //Pas connecté, on ne redirige pas.
    })
  }

  public login() {
    this.popup.showLoaderCustom("Connexion...");
    this.authService.checkCredential(this.username, this.password).subscribe((user) => {
      this.sessionManager.store("user", user['id']);
      
        this.authService.getToken(this.username, this.password).subscribe(data => {
          let token =  "Bearer " + data['token'];
          
          this.sessionManager.store("token",token);
          this.router.navigateByUrl("home", {
            replaceUrl: true
          });
          this.popup.hideLoader();
        })
      },
      (error) => {
        if (error.status == 401) {
          this.popup.showMessage("Identifiant/mot de passe incorrecte(s)");
        } else {
          this.popup.showMessage("Une erreur est survenue, veuillez réessayer plus tard")
        }
        this.popup.hideLoader();
        this.sessionManager.destroy();
      });

  }

  public register() {
    this.router.navigateByUrl("register", {
      replaceUrl: true
    });
  }

}