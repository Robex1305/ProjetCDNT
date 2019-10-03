import { Component } from '@angular/core';

import { Evenement } from '../../models/classes/Evenement'
import { Geolocalisation } from 'src/models/classes/Geolocalisation';
import { NavController, Events } from '@ionic/angular';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'
import { TabmesevenementsPage } from './tabmesevenements/tabmesevenements.page';

@Component({
  selector: 'app-tabEvenements',
  templateUrl: 'tabEvenements.page.html',
  styleUrls: ['tabEvenements.page.scss']
})
export class TabEvenementsPage {
  public listEvenements : Array<Evenement>;
  public tmp_idSuite = 0;
  
  public constructor(public navController : NavController, public events: Events) {
    //Listener d'event "Nouvel evenement crée"
    events.subscribe('nouvelEvenement:created', (evenement) => {
      evenement.evenementId = this._tmp_idSuite;
      this.listEvenements.push(evenement);
      this.trier();
    });

    //Listener d'event "Evenement supprimé"
    events.subscribe('evenement:delete', (evenement) => {
      this.listEvenements = this.listEvenements.filter(e => e.evenementId != evenement.evenementId);
    });
  }

  //Gestion des ID pour la demo
  public get _tmp_idSuite(){
    this.tmp_idSuite = this.tmp_idSuite + 1;
    return this.tmp_idSuite;
  }

  //Trie les evenements en fonction de la date
  public trier(){
    this.listEvenements.sort(function(a,b){
      return b.dateEvenement.getTime() - a.dateEvenement.getTime();
    })
  }

  public ngOnInit(){
    this.listEvenements = new Array<Evenement>();
    this.getEvenements();
  }

  getEvenements(){
    //Generation d'evenement a la volée pour la demo
    for (let index = 0; index < 6; index++) {
      let e = new Evenement();
      e._dateEvenement = new Date(2019, 8, 1 - index, (7 + index), 30);
      e.evenementId = this._tmp_idSuite;
      let geoloc = new Geolocalisation();
      geoloc.libelle = "Lille"
      e.geolocalisation = geoloc;
      e.nb_participants = Math.pow(9, index);
      e.titre = "Evenement n° " + index;
      this.listEvenements.push(e);
    }
  }

  
  onCardClick(evenement : Evenement){
    //On passe en parametre (navigationExtras) du navController l'evenement
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
