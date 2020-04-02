import {
    Injectable
} from '@angular/core';
import {
    ToastController,
    AlertController,
    LoadingController
} from '@ionic/angular';
import {
    Router
} from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class Popup {
    private loaderToShow: any;
    private toast: any;

    public constructor(private toastController: ToastController, private router: Router, private alertController: AlertController, private loadingController: LoadingController) {

    }

    async promptOuiNon(header: string, message: string, fonctionOui: Function, loader: boolean, fonctionNon ? : Function, toast ? : HTMLIonToastElement) {
        const alert = await this.alertController.create({
            header: header,
            message: message,
            buttons: [{
                    text: 'Non',
                    handler: async () => {
                        if (loader) {
                            this.showLoader();
                        }
                        if (fonctionNon != null) {
                            await Function.call(fonctionNon, fonctionNon.arguments);
                        }
                        if (loader) {
                            this.hideLoader();
                        }
                        if (toast !== null) {
                            toast.present();
                        }

                    }
                },
                {
                    text: 'Oui',
                    handler: async () => {
                        if (loader) {
                            this.showLoader();
                        }

                        await Function.call(fonctionOui, fonctionOui.arguments);

                        if (loader) {
                            this.hideLoader();
                        }
                    }
                }
            ]
        })
        alert.present();
    }

    public showLoader() {
        this.showLoaderCustom("Merci de patienter...")
    }

    public showLoaderCustom(texte:string) {
        this.loaderToShow = this.loadingController.create({
            message: texte
        }).then((res) => {
            res.present();
        });
    }

    public hideLoader() {
        setTimeout(() => {
            this.loadingController.dismiss();
        }, 0);
    }

    public showMessage(message: string, duree ? : number) {
        this.toast = this.grillePain(message, duree)
            .then((toastData) => {
                toastData.present();
            });
    }

    /** Fabrique des toasts */
    public grillePain(message: string, duree ? : number) {
        return this.toastController.create({
            message: message,
            showCloseButton: true,
            cssClass: "toast",
            duration: duree != null ? duree : 5000
        })
    }
}