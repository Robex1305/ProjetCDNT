import { Message } from './Message';
import { Utilisateur } from './Utilisateur';
import { UrlResolver } from '@angular/compiler';

export class Conversation{
    public conversation_id : string;
    public titre : string;
    public date_creation : Date;
    public messages : Array<Message>;
    public participants : Array<Utilisateur>;    

    constructor() {
        this.messages = new Array<Message>();
        this.participants = new Array<Utilisateur>();
    }

    public addMembre(utilisateur: Utilisateur){
        this.participants.push(utilisateur);
    }
}