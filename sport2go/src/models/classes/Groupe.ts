import { Utilisateur } from './Utilisateur';

export class Groupe {
    public group_id : number;
    public nom : string;
    public description : string;
    public image : string;
    public membres : Array<Utilisateur>;

    public constructor() {}
}