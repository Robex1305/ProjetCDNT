import { Component } from '@angular/core';
import { Conversation } from 'src/models/classes/Conversations/Conversation';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Utilisateur } from 'src/models/classes/Utilisateur';
import { Groupe } from 'src/models/classes/Groupe';
import { ConversationGroupe } from 'src/models/classes/Conversations/ConversationGroupe';
import { ConversationSimple} from 'src/models/classes/Conversations/ConversationSimple';

@Component({
  selector: 'app-tabmessages',
  templateUrl: 'tabmessages.page.html',
  styleUrls: ['tabmessages.page.scss']
})
export class TabmessagesPage {
  public listeConversationsGroupes : Array<ConversationGroupe>;
  public listeConversationsSimples : Array<ConversationSimple>;
  public constructor(public navController : NavController) {}

  getConversationsGroupes(){
    this.listeConversationsGroupes = new Array<ConversationGroupe>();

    let userMain = new Utilisateur();
    let user2 = new Utilisateur();
    let user3 = new Utilisateur();

    userMain.nom = "ROBERT";
    userMain.prenom = "Alexandre";
    userMain.isEnLigne = true;

    user2.nom = "LELEH";
    user2.prenom = "Jordan";
    user2.isEnLigne = true;

    user3.nom = "FELLENBERG";
    user3.prenom = "Saibastien";
    user3.isEnLigne = false;

    let conv1 = new ConversationGroupe();
    conv1.membres.push(userMain);
    conv1.membres.push(user2);
    conv1.membres.push(user3);
    conv1.titre = "Les dev' qui assurent";
    this.listeConversationsGroupes.push(conv1);

  
    return this.listeConversationsGroupes;
  }

  getConversationsSimples(){
    this.listeConversationsSimples = new Array<ConversationSimple>();

    let userMain = new Utilisateur();
    let user2 = new Utilisateur();
    let user3 = new Utilisateur();

    userMain.nom = "ROBERT";
    userMain.prenom = "Alexandre";
    userMain.isEnLigne = true;

    user2.nom = "LELEH";
    user2.prenom = "Jordan";
    user2.isEnLigne = false;

    user3.nom = "FELLENBERG";
    user3.prenom = "Saibastien";
    user3.isEnLigne = true;
    
    let conv2 = new ConversationSimple(user2);
    userMain.conversationsPrive.push(conv2);
    this.listeConversationsSimples.push(conv2);

    let conv3 = new ConversationSimple(user3);
    conv3.destinataire = user3;
    this.listeConversationsSimples.push(conv3);

    return this.listeConversationsSimples;
  }
  
  onCardClick(conversation : Conversation){
    let navigationExtras : NavigationExtras = {
      queryParams: {
        evenement: JSON.stringify(conversation)
      }
    }
    this.navController.navigateForward(['page-conversation'], navigationExtras);
  }

  ionViewWillEnter(){
    this.listeConversationsGroupes = this.getConversationsGroupes();
    this.listeConversationsSimples = this.getConversationsSimples();
  }

}
