import { Evenement } from "./Evenement";
import { Conversation } from './Conversation';
import { Parametre } from './Parametre';
import { Sport } from './Sport';
import { Statistique } from './Statistique';

export class Utilisateur{
    public utilisateur_id : number;
    public nom : string;
    public prenom : string;
    public date_naissance : Date;
    public sexe : EnumSexe;
    public pseudo : string;
    public image : String;
    public conversations : Array<Conversation>;
    public parametre : Parametre;
    public sport_principaux : Array<Sport>;
    public sport_secondaires : Array<Sport>;
    public listeStatistiques : Array<Statistique>;
    public listeEvenements : Array<Evenement>;

    public constructor() {}
}