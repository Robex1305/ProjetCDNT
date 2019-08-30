import {Component,OnInit} from '@angular/core';
import {Evenement} from 'src/models/classes/Evenement';
import {ActivatedRoute} from '@angular/router';
import {TabEvenementsPage} from '../../tabEvenements/tabEvenements.page';
import {Events,NavController,ToastController,AlertController} from '@ionic/angular';

@Component({
  selector: 'app-page-details-evenement',
  templateUrl: './page-details-evenement.page.html',
  styleUrls: ['./page-details-evenement.page.scss'],
})
export class PageDetailsEvenementPage implements OnInit {

  public evenement: Evenement;
  toast: any;

  public constructor(public navControler: NavController, private route: ActivatedRoute, public events: Events, public toastController: ToastController, public alertCtrl: AlertController) {
    this.route.queryParams.subscribe(params => {
      this.evenement = JSON.parse(params["evenement"])
    })
  }

  ngOnInit() {

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
            this.events.publish("evenement:delete", this.evenement);
            this.toast = this.toastController.create({
              message: 'L`événement "' + this.evenement.titre + '" a été supprimé',
              showCloseButton: true,
              cssClass: "toast",
              duration: 2000
            }).then((toastData) => {
              console.log(toastData);
              toastData.present();
            });
            this.navControler.pop();
          }
        }
      ]
    })
    alert.present();
  }

}