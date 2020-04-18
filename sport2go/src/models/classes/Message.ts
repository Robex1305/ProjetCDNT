import { Utilisateur } from './Utilisateur';

export class Message{
    public id : string;
    public contenu : string;
    public auteur : Utilisateur;

    public constructor() {}
}