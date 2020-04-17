import { Evenement } from "./Evenement";
import { Sport } from './Sport';

export class Utilisateur{
    public id : number;
    public nom : string;
    public prenom : string;
    public dateNaissance : Date;
    public email : string;
    public password : string;
    public constructor() {
    }

    public getNomComplet(){
        return this.prenom + " " + this.nom;
    }
}