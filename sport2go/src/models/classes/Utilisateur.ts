import { Evenement } from "./Evenement";
import { ConversationSimple } from './Conversations/ConversationSimple';
import { ConversationGroupe } from './Conversations/ConversationGroupe';
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
    public conversationsPrive : Array<ConversationSimple>;
    public conversationsGroupe : Array<ConversationGroupe>;
    public parametre : Parametre;
    public sport_principaux : Array<Sport>;
    public sport_secondaires : Array<Sport>;
    public listeStatistiques : Array<Statistique>;
    public listeEvenements : Array<Evenement>;
    public isEnLigne : Boolean;

    public constructor() {
        this.conversationsPrive = new Array<ConversationSimple>();
        this.conversationsGroupe = new Array<ConversationGroupe>();
        this.sport_principaux = new Array<Sport>();
        this.sport_secondaires = new Array<Sport>();
        this.listeStatistiques = new Array<Statistique>();
        this.listeEvenements = new Array<Evenement>();
        this.isEnLigne = true;
    }

    public getNomComplet(){
        return this.prenom + " " + this.nom;
    }
}