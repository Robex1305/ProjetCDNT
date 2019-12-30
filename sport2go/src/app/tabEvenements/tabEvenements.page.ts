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
  
  //Ajout de listener a l'initialisation de la page
  public constructor(public navController : NavController, public events: Events) {

    //Listener de création d'évenement 
    events.subscribe('nouvelEvenement:created', (evenement) => {
      evenement.evenementId = this._tmp_idSuite;
      this.listEvenements.push(evenement);
      this.trier();
    });


    //Listener de suppression d'évenement
    //TODO: a rework avec une vrai suppression en base
    events.subscribe('evenement:delete', (evenement) => {
      this.listEvenements = this.listEvenements.filter(e => e.evenementId != evenement.evenementId);
    });
  }

  //TODO: a supprimer lorsqu'on connectera l'appli a la BDD
  public get _tmp_idSuite(){
    this.tmp_idSuite = this.tmp_idSuite + 1;
    return this.tmp_idSuite;
  }

  //Trie les évenement selon la date
  public trier(){
    this.listEvenements.sort(function(a,b){
      return b.dateEvenement.getTime() - a.dateEvenement.getTime();
    })
  }

  //Chargement des évenements
  public ngOnInit(){
    this.listEvenements = new Array<Evenement>();
    this.getEvenements();
  }

  //Génération en dur d'évenements
  getEvenements(){
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

  
  //Listener de clic: Navigation vers la page de détails de l'évenement
  onCardClick(evenement : Evenement){
    let navigationExtras : NavigationExtras = {
      queryParams: {
        evenement: JSON.stringify(evenement)
      }
    }
    this.navController.navigateForward(['page-details-evenement'], navigationExtras);
  }

  //Navigation vers la page de création d'évenement
  public goToNewEvent(){
    this.navController.navigateForward(['page-nouvel-evenement']);
  }

  //Méthode d'ajout d'évenement. TODO: rework lors de la creation des CRUD
  public addEvent(evenement : Evenement){
    this.listEvenements.push(evenement);
  }

  ionViewWillEnter(){
    
  }
}
