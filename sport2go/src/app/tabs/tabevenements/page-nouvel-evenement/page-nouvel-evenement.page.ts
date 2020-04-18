import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {
  FormGroup
} from '@angular/forms';
import {
  Evenement
} from 'src/models/classes/Evenement';
import {
  NavigationExtras,
  Router
} from '@angular/router';
import {
  NavController,
  ToastController,
  IonDatetime,
  Events,
  IonTextarea
} from '@ionic/angular';
import {
  HttpClient
} from '@angular/common/http';
import {
  Adresse
} from 'src/models/classes/Adresse';
import {
  Geolocalisation
} from 'src/models/classes/Geolocalisation';
import {
  EnumStatut
} from 'src/models/enums/EnumStatut';
import {
  stringify
} from 'querystring';
import {
  Commune
} from 'src/models/classes/DTO/gouv/Commune';
import {
  ChangeDetectorRef
} from '@angular/core'
import {
  Departement
} from 'src/models/classes/DTO/gouv/Departement';
import {
  ApiGeoGouvService
} from 'src/services/ApiGeoGouvService';
import {
  EvenementService
} from 'src/services/EvenementService';
import {
  Popup
} from 'src/util/Popup';
import {
  SessionManager
} from 'src/util/SessionManager';
import {
  Location
} from '@angular/common';
import {
  Conversation
} from 'src/models/classes/Conversation';
import { Utilisateur } from 'src/models/classes/Utilisateur';
import { UtilisateurService } from 'src/services/UtilisateurService';

@Component({
  selector: 'app-page-nouvel-evenement',
  templateUrl: './page-nouvel-evenement.page.html',
  styleUrls: ['./page-nouvel-evenement.page.scss'],
})

/*
  Controleur de la page ou on crée un nouvel évenement
*/
export class PageNouvelEvenementPage implements OnInit {
  public evenement: Evenement;
  public communesAssociees: Array < Commune > ;
  public loaded = false;
  toast: any;



  constructor(
    public apiGeoGouvService: ApiGeoGouvService,
    public evenementService: EvenementService,
    public utilisateurService: UtilisateurService,
    public location: Location,
    public events: Events,
    public toastController: ToastController,
    public httpClient: HttpClient,
    private changeRef: ChangeDetectorRef,
    public sessionManager: SessionManager,
    public popUp: Popup) {}

  /* Retourne la date dans 2 ans a partir d'aujourd'hui qui servira de date maximum pour le datePicker
     afin d'éviter de se retrouver avec des événemenets le 27 Janvier 2599 */
  get maxDate() {
    let today = new Date();
    let year = (today.getFullYear() + 2).toString();
    return year;
  }

  /* Retourne l'année minimum qui servira de date minimum pour le datePicker, afin
     d'éviter de se retrouver avec des événemenets le 27 Janvier 1970 */
  get minDate() {
    let today = new Date();
    let year = today.getFullYear().toString();
    return year;
  }

  /* Instanciation d'un nouvel évenement à l'initialisation de la page*/
  ngOnInit() {
    this.evenement = new Evenement();
    this.evenement.adresse = new Adresse();
    this.evenement.geolocalisation = new Geolocalisation();

    this.changeRef.detectChanges();
    this.loaded = true;
  }

  public createEvent() {
    //On vérifie la validité des informations rentrées dans l'évenement
    let check = this.validationEvenement();
    let userId = this.sessionManager.getCurrentUserId()
    this.utilisateurService.read(parseInt(userId)).subscribe((user:Utilisateur) => {
      this.evenement.createur = user;

      this.evenement.groupe.nom = this.evenement.titre;
      this.evenement.groupe.description = this.evenement.description;
      this.evenement.groupe.admin = user;

      this.evenement.groupe.conversation = new Conversation();
      this.evenement.groupe.conversation.titre = this.evenement.titre;
      this.evenement.groupe.conversation.addMembre(user);

      if (check) {
        this.popUp.showLoaderCustom("Création de l'évenement...")
        this.evenementService.createEvenement(this.evenement).subscribe((evenement) => {
          this.evenement = JSON.parse(JSON.stringify(evenement));
          this.events.publish("nouvelEvenement:created", this.evenement);
          this.popUp.showMessage("Évènement \"" + this.evenement.titre + "\" créé avec succès")
          this.goBack();
          this.popUp.hideLoader()
        }, (err) => {
          this.popUp.showMessage("Une erreur est survenue lors de la création de l'évenement, veuillez réessayer plus tard.")
          this.popUp.hideLoader()
          console.log(err);
        });
      }
    })
  }

  public onCodePostalChange() {
    let cp = this.evenement.adresse.codePostal;

    if (cp.length == 5) {
      this.apiGeoGouvService.getCommunes(cp).subscribe(c => {
        this.communesAssociees = < Commune[] > c;
      }, (err) => {
        this.popUp.showLoaderCustom("La connexion au service de géolocalisation a échoué, veuillez réessayer plus tard.");
      });
    }
  }

  public validationEvenement() {
    let e = this.evenement;
    let messageToast: string;
    let check = true;

    if (e.titre === undefined || e.titre === '') {
      messageToast = "Le titre ne peux pas être vide"
      check = false
    } else if (e.titre.length < 5) {
      messageToast = "Le titre doit faire au moins 5 lettres"
      check = false
    } else if (isNaN(new Date(e.debut).getTime())) {
      messageToast = "Veuillez saisir une date de début pour l'événement"
      check = false
    } else if (isNaN(new Date(e.fin).getTime())) {
      messageToast = "Veuillez saisir une date de fin pour l'événement"
      check = false
    } else if (e.adresse.adresse === undefined || e.adresse.adresse === '') {
      messageToast = "L'adresse de l'événement n'est pas défini"
      check = false
    } else if (e.adresse.ville === undefined || e.adresse.ville === '') {
      messageToast = "La ville de l'événement n'est pas défini"
      check = false
    } else if (e.adresse.codePostal === undefined || e.adresse.codePostal === '') {
      messageToast = "Le code postal de l'événement n'est pas défini"
      check = false
    }

    if (!check) {
      this.popUp.showMessage(messageToast);
    }
    return check;
  }

  public inputValidator(event: any) {
    //console.log(event.target.value);
    const pattern = /[^0-9]/;
    //let inputChar = String.fromCharCode(event.charCode)
    if (pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/, "");
      // invalid character, prevent input
    }
  }

  public goBack() {
    this.location.back();
  }
}