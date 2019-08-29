import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Evenement } from 'src/models/classes/Evenement';
import { NavigationExtras } from '@angular/router';
import { NavController, ToastController, IonDatetime, Events, IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-page-nouvel-evenement',
  templateUrl: './page-nouvel-evenement.page.html',
  styleUrls: ['./page-nouvel-evenement.page.scss'],
})
export class PageNouvelEvenementPage implements OnInit {
  public evenement : Evenement;
  public dateEvenement : Date;

  toast : any;

  constructor(public navController : NavController, public events : Events, public toastController: ToastController) {
  }

  get maxDate(){
    let today = new Date();
    let year = (today.getFullYear() + 2).toString();
    return year;
  }

  get minDate(){
    let today = new Date();
    let year = today.getFullYear().toString();
    return year;
  }

  ngOnInit() {
    this.evenement = new Evenement();
  }

  public createEvent(){
    this.evenement.setDateEvenement(this.dateEvenement);
    let check = this.validationEvenement();
    if(check){
      this.events.publish("nouvelEvenement:created",this.evenement);
      this.navController.pop();
    }
  }

  
  public validationEvenement(){
    let e = this.evenement;
    let messageToast : string;
    
    let check = true;
    if(e.titre === undefined || e.titre === ''){
      messageToast = "Le titre ne peux pas être vide"
      check = false
    }
    else if(e.titre.length < 5){
      messageToast = "Le titre doit faire au moins 5 lettres"
      check = false
    }
    else if(isNaN(e.dateEvenement.getTime())){
      messageToast = "Veuillez saisir une date pour l'événement"
      check = false
    }
    else if(e.geolocalisation.libelle === undefined || e.geolocalisation.libelle === ''){
      messageToast = "Le lieu de l'événement n'est pas défini"
      check = false
    }else{
      messageToast = "Événement créé avec succès";
    }

    this.toast = this.toastController.create({
      message: messageToast,
      duration: 2000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });

    console.log(this.toast.message);
    console.log(check)

    return check;
  }

}
