import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Evenement } from 'src/models/classes/Evenement';
import { NavigationExtras } from '@angular/router';
import { NavController, ToastController, IonDatetime, Events, IonTextarea } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Adresse } from 'src/models/classes/Adresse';
import { Geolocalisation } from 'src/models/classes/Geolocalisation';
import { EnumStatut } from 'src/models/enums/EnumStatut';

@Component({
  selector: 'app-page-nouvel-evenement',
  templateUrl: './page-nouvel-evenement.page.html',
  styleUrls: ['./page-nouvel-evenement.page.scss'],
})

/*
  Controleur de la page ou on crée un nouvel évenement
*/
export class PageNouvelEvenementPage implements OnInit {
  public evenement : Evenement;
  public dateEvenement : Date;
  toast : any;

  

  constructor(public navController : NavController, public events : Events, public toastController: ToastController, public httpClient : HttpClient) {
  }


  /* Retourne la date dans 2 ans a partir d'aujourd'hui qui servira de date maximum pour le datePicker
     afin d'éviter de se retrouver avec des événemenets le 27 Janvier 2599 */
  get maxDate(){
    let today = new Date();
    let year = (today.getFullYear() + 2).toString();
    return year;
  }

  /* Retourne l'année minimum qui servira de date minimum pour le datePicker, afin
     d'éviter de se retrouver avec des événemenets le 27 Janvier 1970 */
  get minDate(){
    let today = new Date();
    let year = today.getFullYear().toString();
    return year;
  }

  /* Instanciation d'un nouvel évenement à l'initialisation de la page*/
  ngOnInit() {
    this.evenement = new Evenement();
    this.evenement.adresse = new Adresse();
    this.evenement.geolocalisation = new Geolocalisation();
  }

  public createEvent(){
    this.evenement.setDateEvenement(this.dateEvenement);
    //On vérifie la validité des informations rentrées dans l'évenement
    let check = this.validationEvenement();

  //TEMP
    this.evenement.adresse.codePostal = "59000";
    this.evenement.adresse.ville = "Lille";
    this.evenement.adresse.pays = "France";
    this.evenement.adresse.rue = "rue nationale";
    this.evenement.adresse.departement = "Nord";
    
    this.evenement.statut = EnumStatut.PUBLIC;
    this.evenement.image = "zob.png";
    this.evenement.dateCreation = new Date();

    this.evenement.geolocalisation.latitude = "5161.02";
    this.evenement.geolocalisation.longitude = "7867.57";
  //FIN TEMP

    if(check){
      let headers = new Headers();
      console.log(JSON.stringify(this.evenement));
      this.httpClient.post("http://localhost:8000/evenements/create", this.evenement).subscribe((evenement) => {
        console.log(evenement)
        this.evenement = <Evenement> evenement;
      });
      //On publie un event disant qu'un évenement a été créé (ex: subscirbe de la page Mes Evenements > met a jour la liste avec le nouvel evenement) 
      this.events.publish("nouvelEvenement:created",this.evenement);
      //On ferme la page
      this.navController.pop();
    }
  }

  
  public validationEvenement(){
    let e = this.evenement;
    let messageToast : string;
    e.demo_isAdminMode = true;
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
      messageToast = 'Événement "'+ this.evenement.titre + '" créé avec succès';
    }

    this.toast = this.toastController.create({
      message: messageToast,
      showCloseButton: true,
      cssClass: "toast",
      duration: 2000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });

    return check;
  }


}
