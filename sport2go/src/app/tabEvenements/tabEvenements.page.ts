import { Component } from '@angular/core';

import { Evenement } from '../../models/classes/Evenement'
import { Geolocalisation } from 'src/models/classes/Geolocalisation';
import { NavController, Events } from '@ionic/angular';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabEvenements',
  templateUrl: 'tabEvenements.page.html',
  styleUrls: ['tabEvenements.page.scss']
})
export class TabEvenementsPage {
  public listEvenements : Array<Evenement>;
  public listEvenementsNouveau : Array<Evenement>;
  public constructor(public navController : NavController, public events: Events) {
    events.subscribe('nouvelEvenement:created', (evenement) => {
      console.log('Evenement ' + evenement + ' recu');
      this.listEvenements.push(evenement);
    });
  }

  public ngOnInit(){
    this.listEvenements = new Array<Evenement>();
    this.getEvenements();
    console.log("INITIALISÉ");
  }

  getEvenements(){
    for (let index = 0; index < 6; index++) {
      let e = new Evenement();
      e._dateEvenement = new Date(2019, 8, 1 - index, (6 + index), 30);
      let geoloc = new Geolocalisation();
      geoloc.libelle = "Lille"
      e.geolocalisation = geoloc;
      e.nb_participants = Math.pow(9, index);
      e.titre = "Evenement n° " + index;
      this.listEvenements.push(e);
    }
  }
  
  onCardClick(evenement : Evenement){
    let navigationExtras : NavigationExtras = {
      queryParams: {
        evenement: JSON.stringify(evenement)
      }
    }
    this.navController.navigateForward(['page-details-evenement'], navigationExtras);
  }

  public goToNewEvent(){
    this.navController.navigateForward(['page-nouvel-evenement']);
  }
  public addEvent(evenement : Evenement){
    this.listEvenements.push(evenement);
  }

  ionViewWillEnter(){
    
  }
}
