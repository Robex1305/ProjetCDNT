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
  DateService
} from 'src/services/DateService';
import {
  Popup
} from 'src/util/Popup';

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
    private route: ActivatedRoute,
    private router: Router,
    public events: Events,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public popup: Popup,
    public dateService: DateService) {}

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





  async delete() {
    this.popup.promptOuiNon(
      "Attention",
      "Etes vous sur de vouloir supprimer cet évenement?",
      () => {
        this.evenementService.delete(this.evenement.id).subscribe(() => {
          this.events.publish("evenement:delete", this.evenement.id);
          this.router.navigateByUrl("evenements");
        });
      },
      true);

  }

}