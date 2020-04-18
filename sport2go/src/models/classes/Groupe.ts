import { Utilisateur } from './Utilisateur';
import { Conversation } from './Conversation';

export class Groupe {
    public id : number;
    public nom : string;
    public description : string;
    public image : string;
    public conversation : Conversation;
    public membres : Array<Utilisateur>;
    public admin : Utilisateur;

    public constructor() {
    }
}