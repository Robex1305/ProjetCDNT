import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';
import {
    Events
} from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { SessionManager } from 'src/util/SessionManager';


@Injectable({
    providedIn: 'root'
})

export class UtilisateurService {
    public baseURL;
    public constructor(private httpClient: HttpClient, public sessionManager:SessionManager) {
        this.baseURL = environment.urlAPI + "/users"
    }


    public read(id: number) {
        const url = this.baseURL + "/read?id=" + id;
        let token = this.sessionManager.get("token");
        console.log("URL: " + url);
        console.log("ID: " + id)
        return this.httpClient.get(url,{
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
    
}