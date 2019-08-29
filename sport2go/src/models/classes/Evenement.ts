import { Geolocalisation } from './Geolocalisation';
import { Adresse } from './Adresse';
import { Utilisateur } from './Utilisateur';

export class Evenement {
    public evenementId : number;
    public titre : string;
    public description : string;
    public nb_participants : number;
    public nb_participantsMax : number;
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
    public isTermine : boolean;

    public constructor() {
      this.adresse = new Adresse();
      this.geolocalisation = new Geolocalisation();  
      this.nb_participants = 0;
    }

    public get icon(){
      if(this.titre != null){
        if(this.titre.endsWith("0")){
            return "add";
          }else if(this.titre.endsWith("1")){
            return "add";
          }else if(this.titre.endsWith("2")){
            return "checkmark";
          }else if(this.titre.endsWith("3")){
            return "checkmark";
          }else if(this.titre.endsWith("4")){
            return "checkmark";
          }else if(this.titre.endsWith("5")){
            return "add";
          }
        }
    }

    public get color(){
      if(this.titre != null){
        if(this.titre.endsWith("0")){
          return "secondary";
        }else if(this.titre.endsWith("1")){
          return "secondary";
        }else if(this.titre.endsWith("2")){
          return "success";
        }else if(this.titre.endsWith("3")){
          return "success";
        }else if(this.isTermine){
          return "light";
        }
      } 
      return "";
    }

    public setDateEvenement(date:Date, heure:Date){
      date = new Date(date);
      heure = new Date(heure);
      this.dateEvenement = date;
      this.dateEvenement = this.dateEvenement;
      this.dateEvenement.setHours(heure.getHours());
      this.dateEvenement.setMinutes(heure.getMinutes());
      this._dateEvenement = this.dateEvenement;
    }

    public set _dateEvenement(date: Date){
      console.log(date);
        this.dateEvenement = date;
        this.formateDateEtHeure();

        this.isTermine = false;
        let today = new Date()
        if(today.getTime() > this.dateEvenement.getTime()){
            this.isTermine = true;    
        }
    }


    public formateDateEtHeure(){
        this.dateEvenement = new Date(this.dateEvenement);
        
        this.dateEvenementFormate = this.dateEvenement.toLocaleDateString();
        this.heureEvenementFormate = this.dateEvenement.getHours() + ":" + this.dateEvenement.getMinutes();
        console.log(this.heureEvenementFormate)
    }


}