import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-tabsocial',
  templateUrl: 'tabsocial.page.html',
  styleUrls: ['tabsocial.page.scss']
})
export class TabsocialPage {

  public groups_index: Array < String >
    public groups_recommandations: Array < String >

    constructor() {}

  ngOnInit() {

    setTimeout(() => {
      this.groups_index = new Array < String > ();
      this.groups_index.push('Pétanque family');
      this.groups_index.push('Les boulistes du 59')
      this.groups_index.push('Recherche Futsal Partenaires')

      this.groups_recommandations = new Array < String > ();
      this.groups_recommandations.push('Le bowling pour tous');
      this.groups_recommandations.push('Pétanque Nord');
      this.groups_recommandations.push('Time to run');
    }, 2000);

  }

  public isEmpty(liste: Array < any > ) {
    if (liste != null) {
      if (liste.length > 0) {
        return false;
      } else {
        return true;
      }
    }
    return true;
  }

}