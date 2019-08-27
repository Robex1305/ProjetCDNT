import { Geolocalisation } from './Geolocalisation';
import { Adresse } from './Adresse';
import { Utilisateur } from './Utilisateur';

export class Evenement {
    public evenementId : number;
    public titre : string;
    public description : string;
    public nb_participants : number;
    public dateCreation : Date;
    public dateEvenement : Date;
    public dateEvenementFormate : string;
    public heureEvenementFormate : string;
    public statut : EnumStatut;
    public adresse : Adresse;
    public geolocalisation : Geolocalisation;
    public createur : Utilisateur;
    public participants : Array<Utilisateur>;
    public limiteParticipants : number;
    public image : string;

    public set _dateEvenement(date : Date){
        this.dateEvenement = date;
        console.log("Formate");
        this.formateDateEtHeure();
    }

    public constructor() {}

    public formateDateEtHeure(){
        this.dateEvenementFormate = this.dateEvenement.toLocaleDateString();

        let heures = this.dateEvenement.getHours().toString();
        if(heures.length < 2){
            heures = "0" + heures;
        }

        let minutes = this.dateEvenement.getMinutes().toString();
        if(minutes.length < 2){
            minutes = "0" + minutes;
        }

        this.heureEvenementFormate = heures + ":" + minutes;
    }


}