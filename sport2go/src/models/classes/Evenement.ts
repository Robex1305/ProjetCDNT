export class Evenement {
    public evenementId : number;
    public titre : string;
    public description : string;
    public nb_participants : number;
    public dateCreation : Date;
    public dateEvenement : Date;
    public statut : EnumStatut;
    public adresse : Adresse;
    public geolocalisation : Geolocalisation;
    public createur : Utilisateur;
    public participants : Array<Utilisateur>;
    public limiteParticipants : number;
    public image : string;

    public constructor() {}
}