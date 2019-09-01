import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/models/classes/Utilisateur';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { EnumSexe } from 'src/models/enums/EnumSexe';

@Component({
  selector: 'app-tabhome',
  templateUrl: './tabhome.page.html',
  styleUrls: ['./tabhome.page.scss'],
})
export class TabhomePage implements OnInit {
  public user : Utilisateur;

  constructor(public navController:NavController) { }

  ngOnInit() {
    this.user = new Utilisateur();
    this.user.prenom = "Jeffrey";
    this.user.nom = "DUSPORT";
    this.user.sexe = EnumSexe.HOMME;
    this.user.date_naissance = new Date(12, 6, 1995);
    this.user.isEnLigne = true;
    this.user.pseudo = "Jeff59";
    this.user.profilePicture = "../../../assets/jeffreyDUSPORT_pp.png";
    this.user.coverPicture = "../../../assets/sport.jpg";
  }

  public goToProfile(){
    let navigationExtras : NavigationExtras = {
      queryParams: {
        user: JSON.stringify(this.user)
      }
    };

    this.navController.navigateForward(['page-profil'], navigationExtras);

  }

}
