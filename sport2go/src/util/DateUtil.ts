import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DateUtil{

    public constructor(){

    }

    public formateDate(date: Date) {
        let d = new Date(date);
        let dLdS = d.toLocaleDateString();
        return dLdS;
      }
    
      public formateHeure(date: Date) {
        let d = new Date(date);
        let heures = d.getHours().toString();
        let minutes = d.getMinutes().toString();
        if (heures.length < 2) {
          heures = "0" + heures;
        }
        if (minutes.length < 2) {
          minutes = "0" + minutes;
        }
    
        return heures + ":" + minutes;
      }
}