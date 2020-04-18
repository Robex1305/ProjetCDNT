import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Popup } from './Popup';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SessionManager{
    
    public constructor(public router:Router, public popup:Popup){

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

    public getCurrentUserId(){
        return this.get("user");
    }


    
    public destroy(){
        localStorage.clear();
    }

}