import {
  Component,
  OnInit
} from '@angular/core';
import {
  Evenement
} from 'src/models/classes/Evenement';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  TabEvenementsPage
} from '../../tabEvenements/tabEvenements.page';
import {
  Events,
  NavController,
  ToastController,
  AlertController,
  LoadingController
} from '@ionic/angular';
import {
  EvenementService
} from 'src/services/EvenementService';
import {
  EventEmitter
} from 'protractor';
import { DateService } from 'src/services/DateService';

@Component({
  selector: 'app-page-details-evenement',
  templateUrl: './page-details-evenement.page.html',
  styleUrls: ['./page-details-evenement.page.scss'],
})
export class PageDetailsEvenementPage implements OnInit {

  public evenement: Evenement;
  toast: any;
  loaderToShow: any;
  public loaded: boolean;

  public constructor(public loadingController: LoadingController,
     public evenementService: EvenementService,
      private route: ActivatedRoute,
       private router: Router,
        public events: Events,
         public toastController: ToastController,
          public alertCtrl: AlertController,
          public dateService : DateService) {}

  ngOnInit() {
    this.loaded = false;
    this.route.paramMap.subscribe(params => {
      let stringId = params.get("evenementId");
      if (stringId !== null) {
        let id = parseInt(stringId);
        this.evenementService.read(id).subscribe((event) => {
          if (event !== null) {
            this.evenement = event;
            this.loaded = true;
          } else {
            this.router.navigateByUrl("/evenements");
          }
        }, (err) => {
          this.router.navigateByUrl("/evenements");
        });
      } else {
        this.router.navigateByUrl("/evenements");
      }
    });
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Merci de patienter...'
    }).then((res) => {
      res.present();
    });
  }
 
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 0);
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
            this.showLoader();
            this.evenementService.delete(this.evenement.id).subscribe(() => {
              this.events.publish("evenement:delete", this.evenement.id);
              this.toast = this.toastController.create({
                message: 'L`événement "' + this.evenement.titre + '" a été supprimé',
                showCloseButton: true,
                cssClass: "toast",
                duration: 2000
              }).then((toastData) => {
                toastData.present();
                this.router.navigateByUrl("evenements");
                this.hideLoader()
              });
              
            });

          }
        }
      ]
    })
    alert.present();
  }

}