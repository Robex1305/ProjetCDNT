import { Component } from '@angular/core';
import { Conversation } from 'src/models/classes/Conversation';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Utilisateur } from 'src/models/classes/Utilisateur';
import { Groupe } from 'src/models/classes/Groupe';

@Component({
  selector: 'app-tabmessages',
  templateUrl: 'tabmessages.page.html',
  styleUrls: ['tabmessages.page.scss']
})
export class TabmessagesPage {
  public constructor(public navController : NavController) {}
  
  onCardClick(conversation : Conversation){
    let navigationExtras : NavigationExtras = {
      queryParams: {
        evenement: JSON.stringify(conversation)
      }
    }
    this.navController.navigateForward(['page-conversation'], navigationExtras);
  }

  ionViewWillEnter(){
  }

}
