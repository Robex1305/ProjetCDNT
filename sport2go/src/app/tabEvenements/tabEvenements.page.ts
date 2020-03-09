import {
  Component,
  NgZone
} from '@angular/core';

import {
  Evenement
} from '../../models/classes/Evenement'
import {
  Geolocalisation
} from 'src/models/classes/Geolocalisation';
import {
  NavController,
  Events,
  LoadingController
} from '@ionic/angular';
import {
  NavigationExtras,
  ActivatedRoute
} from '@angular/router';
import {
  DatePipe,
  getLocaleDateTimeFormat,
  getLocaleDayPeriods
} from '@angular/common'
import {
  TabmesevenementsPage
} from './tabmesevenements/tabmesevenements.page';
import {
  EvenementService
} from 'src/services/EvenementService';

@Component({
  selector: 'app-tabEvenements',
  templateUrl: 'tabEvenements.page.html',
  styleUrls: ['tabEvenements.page.scss']
})
export class TabEvenementsPage {
  public listEvenements: Array < Evenement > ;
  public tmp_idSuite = 0;
  public loaderToShow : any;
  //Ajout de listener a l'initialisation de la page
  public constructor(public navController: NavController,
    public events: Events,
    public evenementService: EvenementService, public loadingController:LoadingController) {
    //Listener d'event "Nouvel evenement crée"
    this.events.subscribe('nouvelEvenement:created', (evenement) => {
      this.listEvenements.push(evenement);
      this.trier();
    });

    //Listener de suppression d'évenement
    //TODO: a rework avec une vrai suppression en base
    //Listener d'event "Evenement supprimé"
    events.subscribe('evenement:delete', (id) => {
      this.listEvenements = this.listEvenements.filter(e => e.id !== id);
    });
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Merci de patienter...'
    }).then((res) => {
      res.present();
 
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    this.hideLoader();
  }
 
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 0);
  }
  

  //Trie les évenement selon la date
  public trier() {
    this.listEvenements.sort(function (a, b) {
      return b.dateEvenement.getTime() - a.dateEvenement.getTime();
    })
  }

  public ngOnInit() {
    this.showLoader();
    this.evenementService.readAll().subscribe(data => {
      this.listEvenements = < Evenement[] > data;
      this.hideLoader();
    });
  }

  public formatDate(date: Date) {
    let d = new Date(date);
    let dLdS = d.toLocaleDateString();
    return dLdS;
  }

  public formatHeure(date: Date) {
    let d = new Date(date);
    let heures = d.getHours().toString();
    let minutes = d.getMinutes().toString();
    if (heures.length < 2) {
      heures = "0" + heures;
    }
    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }

    return heures + ":" + minutes;
  }

  //Listener de clic: Navigation vers la page de détails de l'évenement
  onCardClick(evenement: Evenement) {
    //On passe en parametre (navigationExtras) du navController l'evenement
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id : evenement.id
      }
    }
    this.navController.navigateForward(['page-details-evenement'], navigationExtras);
  }

  //Navigation vers la page de création d'évenement
  public goToNewEvent() {
    this.navController.navigateForward(['page-nouvel-evenement']);
  }

  //Méthode d'ajout d'évenement. TODO: rework lors de la creation des CRUD
  public addEvent(evenement: Evenement) {
    this.listEvenements.push(evenement);
  }
}