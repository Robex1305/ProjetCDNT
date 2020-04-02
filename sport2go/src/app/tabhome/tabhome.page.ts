import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/models/classes/Utilisateur';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { EnumSexe } from 'src/models/enums/EnumSexe';
import { AuthenticationService } from 'src/services/AuthenticationService';
import { Popup } from 'src/util/Popup';

@Component({
  selector: 'app-tabhome',
  templateUrl: './tabhome.page.html',
  styleUrls: ['./tabhome.page.scss'],
})
export class TabhomePage implements OnInit {
  public user : Utilisateur;
  public hello : String; 

  constructor(public router:Router, public authService:AuthenticationService, public popUp:Popup) { }

  ngOnInit() {
    
  }

  public logout(){
    this.authService.destroySession();
    this.router.navigateByUrl("login");
    this.popUp.showMessage("Déconnecté")
  }
}
