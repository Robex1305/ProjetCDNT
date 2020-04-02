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

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    public authenticationURL = "http://localhost:8000/authentication";

    public constructor(public httpClient: HttpClient) {
    }

    public checkCredential(login, password) {
        return this.httpClient.post(this.authenticationURL + "/login", {login, password});
    }

    public destroySession(){
        localStorage.clear();
    }

    public register(utilisateur:Utilisateur) {
        return this.httpClient.post(this.authenticationURL + "/register", utilisateur);
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