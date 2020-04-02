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

@Injectable({
    providedIn: 'root'
})

export class EvenementService {
    public baseURL = "http://localhost:8000/evenements";
    public constructor(private httpClient: HttpClient, public events: Events, public apiGeoGouvService: ApiGeoGouvService) {
        
    }

    public createEvenement(evenement: Evenement) {
        //TODO
        //TEMP
        evenement.statut = EnumStatut.PUBLIC;
        evenement.image = "zob.png";
        evenement.dateCreation = new Date();
        evenement.adresse.pays = "FRANCE";
        evenement.geolocalisation.latitude = "5161.02";
        evenement.geolocalisation.longitude = "7867.57";
        evenement.geolocalisation.libelle = "ICI";
        //FIN TEMP  
        const url = this.baseURL + "/create";
        let token = localStorage.getItem("token");
        
        return this.httpClient.post(url, evenement, {
            responseType: 'text',
            headers: {"token": token}
        });
    }

    public read(id: number) {
        const url = this.baseURL + "/read/" + id;
        let token = localStorage.getItem("token");
        
        return this.httpClient.get<Evenement>(url, {
            headers: {"token": token}
        })
    }

    public delete(id: number) {
        const url = this.baseURL + "/delete/" + id;
        let token = localStorage.getItem("token");

        return this.httpClient.delete(url, {
            headers: {"token": token}
        });
    }
    public readAll() {
        let token = localStorage.getItem("token");
        return this.httpClient.get<Evenement[]>(this.baseURL + "/readAll", {
            headers: {"token": token}
        });
    }
}