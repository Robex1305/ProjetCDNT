import {
  Component, OnInit
} from '@angular/core';
import {
  Evenement
} from 'src/models/classes/Evenement';
import {
  NavController, Events
} from '@ionic/angular';
import {
  NavigationExtras
} from '@angular/router';
import {
  Geolocalisation
} from 'src/models/classes/Geolocalisation';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-tabmesevenements',
  templateUrl: 'tabmesevenements.page.html',
  styleUrls: ['tabmesevenements.page.scss']
})
export class TabmesevenementsPage{

  public listEvenements: Array<Evenement>;

  //Ajout de listener a l'initialisation de la page
  public constructor(public navController: NavController, public events : Events, public httpClient : HttpClient) {
    //Listener évenement créé: on l'ajoute a la liste
    events.subscribe('nouvelEvenement:created', (evenement) => {
      this.listEvenements.push(evenement);
    });
  }
  

  public ngOnInit(){
    this.listEvenements = new Array<Evenement>();
  }

  //Listener de clic: navigation vers la page détail de l'évenement cliqué
  onCardClick(evenement: Evenement) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        evenement: JSON.stringify(evenement)
      }
    }
    this.navController.navigateForward(['page-details-evenement'], navigationExtras);
  }

}