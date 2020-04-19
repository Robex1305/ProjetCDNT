import { Geolocalisation } from './Geolocalisation';
import { Adresse } from './Adresse';
import { Utilisateur } from './Utilisateur';
import { Groupe } from './Groupe';

export class Evenement {
    public id : number;
    public titre : string;
    public description : string;
    public nombreParticipantsMax : number;
    public debut : Date;
    public fin : Date;
    public adresse : Adresse;
    public geolocalisation : Geolocalisation;
    public createur : Utilisateur;
    public participants : Array<Utilisateur>;
    public image : string;
    public groupe : Groupe;

    public constructor() {
      this.adresse = new Adresse();
      this.geolocalisation = new Geolocalisation(); 
      this.groupe = new Groupe();
      this.groupe.membres = new Array<Utilisateur>();
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