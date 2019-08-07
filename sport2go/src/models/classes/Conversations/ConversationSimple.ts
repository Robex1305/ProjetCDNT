import { Conversation } from './Conversation';
import { Utilisateur } from '../Utilisateur';
import { EnumTypeConversation } from 'src/models/enums/EnumTypeConversation';

export class ConversationSimple extends Conversation{
    public destinataire : Utilisateur;

    public constructor(user : Utilisateur){
        super(EnumTypeConversation.SIMPLE);
        this.destinataire = user;
        this.titre = this.destinataire.getNomComplet();
    }
}