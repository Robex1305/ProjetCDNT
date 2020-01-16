import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departement } from 'src/models/classes/DTO/gouv/Departement';
import { Commune } from 'src/models/classes/DTO/gouv/Commune';

@Injectable({
    providedIn: 'root'
})

export class ApiGeoGouvService{
    
    public constructor(private httpClient:HttpClient){

    }

    public getDepartement(codePostal:string){
        let codeDepartement = codePostal.substring(0,2);
        return this.httpClient.get("https://geo.api.gouv.fr/departements?code=" + codeDepartement)
    }

    public getCommunes(codePostal:string){
        return this.httpClient.get("https://geo.api.gouv.fr/communes?codePostal=" + codePostal)
    }
}