import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Evenement } from 'src/models/classes/Evenement';
import { NavigationExtras } from '@angular/router';
import { NavController, ToastController, IonDatetime, Events } from '@ionic/angular';

@Component({
  selector: 'app-page-nouvel-evenement',
  templateUrl: './page-nouvel-evenement.page.html',
  styleUrls: ['./page-nouvel-evenement.page.scss'],
})
export class PageNouvelEvenementPage implements OnInit {
  public evenement : Evenement;
  public heureEvenement : Date;
  toast : any;

  constructor(public navController : NavController, public events : Events, public toastController: ToastController) {

  }

  ngOnInit() {
    this.evenement = new Evenement();
  }

  public createEvent(){
    this.navController.pop();
    console.log("HEURE EVENT: " + this.heureEvenement.getHours);
    this.evenement.dateEvenement.setHours(this.heureEvenement.getHours());
    this.evenement.dateEvenement.setMinutes(this.heureEvenement.getMinutes());
    this.events.publish("nouvelEvenement:created",this.evenement);
    console.log("Evenement cree");
    this.toast = this.toastController.create({
      message: 'Evenement créé!',
      duration: 2000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
    
  }

}
