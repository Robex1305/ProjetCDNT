import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from 'src/models/classes/Evenement';
import { EnumStatut } from 'src/models/enums/EnumStatut';
import { Events } from '@ionic/angular';
import { Departement } from 'src/models/classes/DTO/gouv/Departement';
import { ApiGeoGouvService } from './ApiGeoGouvService';

@Injectable({
    providedIn: 'root'
})

export class EvenementService{
    public baseURL = "http://localhost:8000/evenements";
    
    public constructor(private httpClient:HttpClient, public events: Events, public apiGeoGouvService : ApiGeoGouvService){

    }

    public createEvenement(evenement:Evenement){
        //TEMP
        evenement.statut = EnumStatut.PUBLIC;
        evenement.image = "zob.png";
        evenement.dateCreation = new Date();
        evenement.nb_participants = 0;
        evenement.adresse.pays = "FRANCE";
        evenement.geolocalisation.latitude = "5161.02";
        evenement.geolocalisation.longitude = "7867.57";
        evenement.geolocalisation.libelle = "ICI";
        //FIN TEMP  
    
        let headers = new Headers();
        console.log(JSON.stringify(evenement));
        return this.httpClient.post(this.baseURL + "/create", evenement)
    }

    public readAll(){
        let httpHeaders = new HttpHeaders();
        httpHeaders.set("Accept","application/json");

        return this.httpClient.get(this.baseURL + "/readAll", {headers: httpHeaders});
    }
}