import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/models/classes/Utilisateur';
import { NavController, IonImg } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.page.html',
  styleUrls: ['./page-profil.page.scss'],
})
export class PageProfilPage{
  public user : Utilisateur;

  public profilePicture: HTMLElement;
  public coverPicture: HTMLElement;
  public profileHeader: HTMLElement;
  public profileBody: HTMLElement;

  public constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params["user"])
    })
  }

ionViewWillEnter(){

  ///////////////////////////////////
  //Bordel CSS (A revoir/optimiser)//
  ///////////////////////////////////

  this.coverPicture = document.getElementById("coverPicture");
  this.coverPicture.setAttribute("style", "background-image: url('" + this.user.coverPicture + "');");
    
  this.profilePicture = document.getElementById("profilePicture");
  let pxProfileWidth = this.profilePicture.clientWidth;
  let pxProfileHeight = pxProfileWidth;
  let pxProfileMarginTopHeight = this.coverPicture.clientHeight - (pxProfileHeight/2);

  this.profilePicture.setAttribute("style", "background-image: url('" + this.user.profilePicture + "'); height: "+ pxProfileHeight + "px; margin-top: " + pxProfileMarginTopHeight + "px;");

  let pxProfileHeaderHeight = this.coverPicture.clientHeight + pxProfileHeight;
  this.profileHeader = document.getElementById("profileHeader");
  this.profileHeader.setAttribute("style", "width: 100%; height: " + pxProfileHeaderHeight + "px; background-color:white; position: fixed;")

  this.profileBody = document.getElementById("profileBody");
  this.profileBody.setAttribute("style","margin-top: " + pxProfileHeaderHeight + "px; padding: 5%; background-color:rgb(233, 233, 233); display: flex;");
    

  }


}
