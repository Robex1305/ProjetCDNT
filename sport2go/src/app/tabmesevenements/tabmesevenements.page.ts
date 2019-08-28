import {
  Component
} from '@angular/core';
import {
  Evenement
} from 'src/models/classes/Evenement';
import {
  NavController
} from '@ionic/angular';
import {
  NavigationExtras
} from '@angular/router';
import {
  Geolocalisation
} from 'src/models/classes/Geolocalisation';

@Component({
  selector: 'app-tabmesevenements',
  templateUrl: 'tabmesevenements.page.html',
  styleUrls: ['tabmesevenements.page.scss']
})
export class TabmesevenementsPage {
  listEvenements: Array < Evenement > ;
  public constructor(public navController: NavController) {}

  getEvenements() {
    let listeEvenements = new Array < Evenement > ();
    for (let index = 2; index < 5; index++) {
      let e = new Evenement();
      e._dateEvenement = new Date(2019, 8, 1 - index, (6 + index), 30);
      let geoloc = new Geolocalisation();
      geoloc.libelle = "Lille"
      e.geolocalisation = geoloc;
      e.nb_participants = Math.pow(9, index);
      e.titre = "Evenement n° " + index;
      e.isTermine;
      listeEvenements.push(e);
    }
    return listeEvenements;
  }

  getEvenementsTermine() {
    let listeEvenements = new Array < Evenement > ();
    let e = new Evenement();
    e._dateEvenement = new Date(2019, 8, 11, 13, 30);
    let geoloc = new Geolocalisation();
    geoloc.libelle = "Lille"
    e.geolocalisation = geoloc;
    e.nb_participants = 2846;
    e.titre = "Evenement terminé";
    listeEvenements.push(e);
    return listeEvenements;
  }

  onCardClick(evenement: Evenement) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        evenement: JSON.stringify(evenement)
      }
    }
    this.navController.navigateForward(['page-details-evenement'], navigationExtras);
  }

  ionViewWillEnter() {
    this.listEvenements = this.getEvenements();
  }
}