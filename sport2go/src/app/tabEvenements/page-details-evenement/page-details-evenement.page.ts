import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/models/classes/Evenement';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-details-evenement',
  templateUrl: './page-details-evenement.page.html',
  styleUrls: ['./page-details-evenement.page.scss'],
})
export class PageDetailsEvenementPage implements OnInit {

  public evenement : Evenement;

  public constructor(private route : ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.evenement = JSON.parse(params["evenement"])
    })
  }

  ngOnInit() {

  }

}
