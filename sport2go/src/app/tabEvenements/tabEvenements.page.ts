import { Component } from '@angular/core';
import { Evenement } from '../../models/classes/Evenement'

@Component({
  selector: 'app-tabEvenements',
  templateUrl: 'tabEvenements.page.html',
  styleUrls: ['tabEvenements.page.scss']
})
export class TabEvenementsPage {

  public listEvenements : Array<Evenement>;
  constructor() {}

  getEvenements(){
    let listeEvenements = new Array<Evenement>();
    for (let index = 0; index < 10; index++) {
      let e = new Evenement();
      e.titre = "Evenement n° " + index;
      e.description = "Ceci est une description de l'evenement n° " + index + ".";
      console.log("Evenement n°" + e.titre + " créé");
      listeEvenements.push(e);
      
    }
    return listeEvenements;
  }

  ionViewWillEnter(){
    this.listEvenements = this.getEvenements();
  }
}
