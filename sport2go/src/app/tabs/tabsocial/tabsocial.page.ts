import { Component } from '@angular/core';

@Component({
  selector: 'app-tabsocial',
  templateUrl: 'tabsocial.page.html',
  styleUrls: ['tabsocial.page.scss']
})
export class TabsocialPage{

  public groups_index: string[] = [];
  public groups_recommendations: string[] = [];

  constructor() {}

  ngOnInit() {
    
    setTimeout(() => {
      this.groups_index = ['Pétanque family','Les boulistes du 59','Recherche Futsal Partenaires']
      this.groups_recommendations = ['Le bowling pour tous','Pétanque Nord','Time to run']  
    }, 2000);
   
  }
}
