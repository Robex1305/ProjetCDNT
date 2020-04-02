import { Evenement } from "./Evenement";
import { ConversationSimple } from './Conversations/ConversationSimple';
import { ConversationGroupe } from './Conversations/ConversationGroupe';
import { Parametre } from './Parametre';
import { Sport } from './Sport';
import { Statistique } from './Statistique';

export class Utilisateur{
    public id : number;
    public nom : string;
    public prenom : string;
    public dateNaissance : Date;
    public email : string;
    public password : string;
    public token : string;
    public evenements : Evenement[];
    public sports : Sport[];
    public sportPrincipal : Sport;
    public constructor() {
    }

    public getNomComplet(){
        return this.prenom + " " + this.nom;
    }
}