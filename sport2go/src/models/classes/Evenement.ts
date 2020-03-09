import { Geolocalisation } from './Geolocalisation';
import { Adresse } from './Adresse';
import { Utilisateur } from './Utilisateur';

export class Evenement {
    public id : number;
    public titre : string;
    public description : string;
    public nombreParticipantsMax : number;
    public dateCreation : Date;
    public dateEvenement : Date;
    public statut : String;
    public adresse : Adresse;
    public geolocalisation : Geolocalisation;
    public createur : Utilisateur;
    public participants : Array<Utilisateur>;
    public limiteParticipants : number;
    public image : string;
    public dateEvenementFormatee: string;
    public heureEvenementFormatee: string;

    public constructor() {
      this.adresse = new Adresse();
      this.geolocalisation = new Geolocalisation(); 
      this.nombreParticipantsMax = 0;
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
}