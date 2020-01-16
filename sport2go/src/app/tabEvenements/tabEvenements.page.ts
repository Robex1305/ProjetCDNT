import { Component, NgZone } from '@angular/core';

import { Evenement } from '../../models/classes/Evenement'
import { Geolocalisation } from 'src/models/classes/Geolocalisation';
import { NavController, Events } from '@ionic/angular';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'
import { TabmesevenementsPage } from './tabmesevenements/tabmesevenements.page';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse } from "@angular/common/http"
import { EvenementService } from 'src/services/EvenementService';

@Component({
  selector: 'app-tabEvenements',
  templateUrl: 'tabEvenements.page.html',
  styleUrls: ['tabEvenements.page.scss']
})
export class TabEvenementsPage {
  public listEvenements : Array<Evenement>;
  public tmp_idSuite = 0;
  

  //Ajout de listener a l'initialisation de la page
  public constructor(public navController : NavController, 
                    public events: Events, public httpClient : HttpClient, 
                    public evenementService : EvenementService) {
    //Listener d'event "Nouvel evenement crée"
      this.events.subscribe('nouvelEvenement:created', (evenement) => {
      this.listEvenements.push(evenement);
      this.trier();
    });


    //Listener de suppression d'évenement
    //TODO: a rework avec une vrai suppression en base
    //Listener d'event "Evenement supprimé"
    events.subscribe('evenement:delete', (evenement) => {
      this.listEvenements = this.listEvenements.filter(e => e.id != evenement.evenementId);
    });
  }

  //Trie les évenement selon la date
  public trier(){
    this.listEvenements.sort(function(a,b){
      return b.dateEvenement.getTime() - a.dateEvenement.getTime();
    })
  }

  public ngOnInit(){
    this.evenementService.readAll().subscribe(data => {
      console.log("Data: " + data)
      this.listEvenements = <Evenement[]> data;
      console.log(this.listEvenements)
    });
  }
  
  //Listener de clic: Navigation vers la page de détails de l'évenement
  onCardClick(evenement : Evenement){
    //On passe en parametre (navigationExtras) du navController l'evenement
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
}
