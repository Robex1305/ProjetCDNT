import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    Observable
} from 'rxjs';
import {
    Utilisateur
} from 'src/models/classes/Utilisateur';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    public baseURL;

    public constructor(public httpClient: HttpClient) {
        this.baseURL = environment.urlAPI + "/authentication";
    }

    public checkCredential(login, password) {
        return this.httpClient.post(this.baseURL + "/login", {login, password});
    }

    public destroySession(){
        localStorage.clear();
    }

    public register(utilisateur:Utilisateur) {
        return this.httpClient.post(this.baseURL + "/register", utilisateur);
    }

    public checkToken():boolean {
        let token = localStorage.getItem("token");
        if(token !== null){
            return true;
        }
        else{
           return false;
        }
    }
}