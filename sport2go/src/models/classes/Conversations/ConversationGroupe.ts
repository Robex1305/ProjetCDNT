import { Conversation } from './Conversation';
import { Utilisateur } from '../Utilisateur';
import { EnumTypeConversation } from 'src/models/enums/EnumTypeConversation';

export class ConversationGroupe extends Conversation{
    public membres : Array<Utilisateur>;

    public constructor(){
        let typeConversation = EnumTypeConversation.GROUPE;
        super(typeConversation);
        this.membres = new Array<Utilisateur>();
        
    }

    public addMembre(user : Utilisateur){
        this.membres.push(user);
    }
}