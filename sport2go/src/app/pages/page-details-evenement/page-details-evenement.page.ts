import {Component,OnInit} from '@angular/core';
import {Evenement} from 'src/models/classes/Evenement';
import {ActivatedRoute} from '@angular/router';
import {TabEvenementsPage} from '../../tabEvenements/tabEvenements.page';
import {Events,NavController,ToastController,AlertController, LoadingController} from '@ionic/angular';
import { EvenementService } from 'src/services/EvenementService';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-page-details-evenement',
  templateUrl: './page-details-evenement.page.html',
  styleUrls: ['./page-details-evenement.page.scss'],
})
export class PageDetailsEvenementPage implements OnInit{

  public evenement: Evenement;
  toast: any;
  loaderToShow : any;
  public loaded : boolean;

  public constructor(public loadingController:LoadingController, public evenementService:EvenementService, public navController: NavController, private route: ActivatedRoute, public events: Events, public toastController: ToastController, public alertCtrl: AlertController) {
  }

  ngOnInit(){
    this.loaded = false;
    this.route.queryParams.subscribe(params => {
      this.evenementService.read(params["id"]).subscribe((event) => {
        this.evenement = event;
        this.loaded = true;
      });
    });
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: "Demande de confirmation",
      message: 'Êtes-vous sur de vouloir supprimer l`événement "' + this.evenement.titre + '" ?',
      buttons: [{
          text: 'Non',
        },
        {
          text: 'Oui',
          handler: () => {
            this.evenementService.delete(this.evenement.id).subscribe(() => {
              this.events.publish("evenement:delete", this.evenement.id);
              this.toast = this.toastController.create({
                message: 'L`événement "' + this.evenement.titre + '" a été supprimé',
                showCloseButton: true,
                cssClass: "toast",
                duration: 2000
              }).then((toastData) => {
                console.log(toastData);
                toastData.present();
              });
              this.navController.navigateForward("tabs/tabEvenements");
            });
            
          }
        }
      ]
    })
    alert.present();
  }

}