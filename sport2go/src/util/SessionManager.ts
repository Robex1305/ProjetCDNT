import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/models/classes/Utilisateur';

@Injectable({
    providedIn: 'root'
})

export class SessionManager{
    
    public constructor(){

    }

    public store(key:string, value:string){
        localStorage.setItem(key, value)
    }

    public get(key:string) {
        return localStorage.getItem(key);
    }

    public storeObject(key:string, value:Object){
        localStorage.setItem(key, JSON.stringify(value))
    }

    public getObject(key:string) {
        return JSON.parse(localStorage.getItem(key));
    }

    public getCurrentUser():Utilisateur{
        return this.getObject("user");
    }

    public setCurrentUser(user:Utilisateur){
        return this.storeObject("user", user);
    }

    
    public destroy(){
        localStorage.clear();
    }
    
    public checkToken():boolean {
        let token = this.get("token");
        if(token !== null){
            return true;
        }
        else{
           return false;
        }
    }

}