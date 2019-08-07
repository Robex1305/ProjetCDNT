import { Utilisateur } from './Utilisateur';

export class Message{
    public message_id : string;
    public contenu : string;
    public auteur : Utilisateur;

    public constructor() {}
}