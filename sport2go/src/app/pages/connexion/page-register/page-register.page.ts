import {
  Component,
  OnInit
} from '@angular/core';
import {
  Utilisateur
} from 'src/models/classes/Utilisateur';
import {
  AuthenticationService
} from 'src/services/AuthenticationService';
import {
  Popup
} from 'src/util/Popup';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.page.html',
  styleUrls: ['./page-register.page.scss'],
})
export class PageRegisterPage implements OnInit {
  public user : Utilisateur;

  constructor(private authService: AuthenticationService, private popup: Popup, private router: Router) {
    this.user = new Utilisateur();
  }

  ngOnInit() {}

  public register() {
    if (this.user.nom == null) {
      this.popup.showMessage("Le nom n'est pas renseigné")
    }
    else if (this.user.prenom == null) {
      this.popup.showMessage("Le prénom n'est pas renseigné")
    }
    else if (this.user.dateNaissance == null) {
      this.popup.showMessage("La date de naissance n'est pas renseignée")
    }
    else if (this.user.email == null) {
      this.popup.showMessage("L'adresse email n'est pas renseignée")
    } else if(this.user.password == null) {
      this.popup.showMessage("Le mot de passe n'est pas renseigné")
    } else {
      this.popup.showLoader();
      this.authService.register(this.user).subscribe((resp) => {
        this.router.navigateByUrl("login", {
          replaceUrl: true
        });
        this.popup.showMessage("Compte créé avec succès")
        //TODO: mail de vérification
        this.popup.hideLoader()
      }, (err) => {
        this.popup.showMessage("Une erreur est survenue lors de la création de votre copte. Veuillez réessayer plus tard")
        console.log(err);
        this.popup.hideLoader()
      })

    }
  }

}