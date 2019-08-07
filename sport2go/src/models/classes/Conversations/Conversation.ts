import { Message } from '../Message';
import { Utilisateur } from '../Utilisateur';
import { UrlResolver } from '@angular/compiler';
import { EnumTypeConversation } from 'src/models/enums/EnumTypeConversation';

export abstract class Conversation{
    public conversation_id : string;
    public titre : string;
    public date_creation : Date;
    public listeMessages : Array<Message>;
    public typeConversation : EnumTypeConversation;

    constructor(enumTypeConversation : EnumTypeConversation) {
        this.listeMessages = new Array<Message>();
        this.typeConversation = enumTypeConversation;
    }

    public isSimple() {
        if(this.typeConversation == EnumTypeConversation.SIMPLE){
            return true;
        }else{
            return false;
        }
    }

    public isGroupe() {
        if(this.typeConversation == EnumTypeConversation.GROUPE){
            return true;
        }else{
            return false;
        }
    }
}