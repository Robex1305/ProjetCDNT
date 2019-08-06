import { Message } from './Message';

export class Conversation{
    public conversation_id : string;
    public titre : string;
    public date_creation : Date;
    public listeMessages : Array<Message>;

    public constructor() {}
}