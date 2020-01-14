import { Geolocalisation } from './Geolocalisation';
import { Adresse } from './Adresse';
import { Utilisateur } from './Utilisateur';

export class Evenement {
    public id : number;
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
    public demo_isAdminMode = false;

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
        }else if(!this.isTermine){
          return "secondary";
        }
      } 
      return "";
    }

    public setDateEvenement(date:Date){
      date = new Date(date);
      this.dateEvenement = date;
      this._dateEvenement = this.dateEvenement;
    }

    public set _dateEvenement(date: Date){
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
        let heures = this.dateEvenement.getHours().toString() ;
        let minutes = this.dateEvenement.getMinutes().toString();
        if(heures.length <2){
          
          heures = "0" + heures;
        }
        if(minutes.length<2){
          minutes = "0" + minutes;
        }
        this.heureEvenementFormate = heures + ":" + minutes;
    }


}