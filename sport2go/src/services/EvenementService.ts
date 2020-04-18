import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';
import {
    Evenement
} from 'src/models/classes/Evenement';
import {
    EnumStatut
} from 'src/models/enums/EnumStatut';
import {
    Events
} from '@ionic/angular';
import {
    Departement
} from 'src/models/classes/DTO/gouv/Departement';
import {
    ApiGeoGouvService
} from './ApiGeoGouvService';
import { environment } from 'src/environments/environment';
import { Geolocalisation } from 'src/models/classes/Geolocalisation';
import { SessionManager } from 'src/util/SessionManager';

@Injectable({
    providedIn: 'root'
})

export class EvenementService {
    public baseURL;
    public constructor(private httpClient: HttpClient, public events: Events, public sessionManager:SessionManager, public apiGeoGouvService: ApiGeoGouvService) {
        this.baseURL = environment.urlAPI + "/evenements"
    }

    public createEvenement(evenement: Evenement) {
        const url = this.baseURL + "/create";
        let token = this.sessionManager.get("token");
        let geo = new Geolocalisation();
        geo.latitude = 123456789.0;
        geo.longitude = 987654321.0;
        geo.libelle = "ABCDEFGHIJK"
        evenement.geolocalisation = geo;

        evenement.adresse.pays = "FRANCE";
      

        console.log(JSON.stringify(evenement));
        return this.httpClient.post(url, evenement, {
            responseType: 'text',
            headers: {"Authorization": token}
        });
    }

    public read(id: number) {
        const url = this.baseURL + "/read?id=" + id;
        let token = this.sessionManager.get("token");
        console.log("URL: " + url);
        console.log("ID: " + id)
        return this.httpClient.get<Evenement>(url,{
            headers: {"Authorization": token}
        })
    }

    public delete(id: number) {
        const url = this.baseURL + "/delete/" + id;
        let token = this.sessionManager.get("token");

        return this.httpClient.delete(url, {
            headers: {"Authorization": token}
        });
    }
    
    public readAll() {
        let token = this.sessionManager.get("token");
        return this.httpClient.get<Evenement[]>(this.baseURL + "/readAll", {
            headers: {"Authorization": token}
        });
    }
}