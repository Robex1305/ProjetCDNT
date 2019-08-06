import { Component } from '@angular/core';

import { Evenement } from '../../models/classes/Evenement'
import { Geolocalisation } from 'src/models/classes/Geolocalisation';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tabEvenements',
  templateUrl: 'tabEvenements.page.html',
  styleUrls: ['tabEvenements.page.scss']
})
export class TabEvenementsPage {
  public listEvenements : Array<Evenement>;
  

  public constructor(public navController : NavController) {
  }

  getEvenements(){
    let listeEvenements = new Array<Evenement>();
    for (let index = 0; index < 10; index++) {
      let e = new Evenement();
      e.titre = "Evenement n° " + index;
      listeEvenements.push(e);
      
    }
    return listeEvenements;
  }
  
  onCardClick(evenement : Evenement){
    let navigationExtras : NavigationExtras = {
      queryParams: {
        evenement: JSON.stringify(evenement)
      }
    }
    this.navController.navigateForward(['page-details-evenement'], navigationExtras);
  }

  ionViewWillEnter(){
    this.listEvenements = this.getEvenements();
  }
}
