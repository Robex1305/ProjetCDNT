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
  TabevenementsPage
} from '../tabevenements.page';
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
import {
  DateUtil
} from 'src/util/DateUtil';
import {
  Popup
} from 'src/util/Popup';
import { SessionManager } from 'src/util/SessionManager';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-details-evenement',
  templateUrl: './page-details-evenement.page.html',
  styleUrls: ['./page-details-evenement.page.scss'],
})
export class PageDetailsEvenementPage implements OnInit {

  public evenement: Evenement;


  public loaded: boolean;

  public constructor(public loadingController: LoadingController,
    public evenementService: EvenementService,
    public sessionManager:SessionManager,
    private route: ActivatedRoute,
    private router: Router,
    public events: Events,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public popup: Popup,
    public dateUtil: DateUtil,
    public alertController:AlertController) {}

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
            this.router.navigateByUrl("/../");
            this.popup.showMessage("Une erreur est survenue lors de la récupération de l'évenement")
          }
        }, (err) => {
          this.router.navigateByUrl("/../");
          this.popup.showMessage("Une erreur est survenue lors de la récupération de l'évenement")
        });
      } else {
        this.router.navigateByUrl("/../");
        this.popup.showMessage("Une erreur est survenue lors de la récupération de l'évenement")
      }
    });
  }

  public isCreateur(){
    if(this.evenement.createur.id === parseInt(this.sessionManager.getCurrentUserId())){
      return true;
    }
    else{
      return false
    }
  }

  public async delete() {
    const alert = await this.alertController.create({
      header: "Attention",
      message: "Êtes-vous sûr de vouloir supprimer cet évenement?",
      buttons: [{
              text: 'Non',
          },
          {
              text: 'Oui',
              handler: () => {
                this.popup.showLoader();
                this.evenementService.delete(this.evenement.id).subscribe(response => {
                  console.log("COUCOUMABITELOL")
                }, error => {
                  this.popup.hideLoader();
                  this.popup.showMessage("Une erreur est survenue lors de la suppression de l'évenement")
                }, () => {
                  this.popup.hideLoader();
                  this.popup.showMessage("L'évenement a été supprimé");
                  this.events.publish("evenement:created", this.evenement)
                  this.router.navigateByUrl("/../../");
                });
              }
          }
      ]
  })
  alert.present();
  }

}