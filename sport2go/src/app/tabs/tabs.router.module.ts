import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  TabsPage
} from './tabs.page';
import { Guardian } from 'src/services/Guardian';

const routes: Routes = [{
    path: '',
    component: TabsPage,
    canActivate: [Guardian],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../tabhome/tabhome.module').then(m => m.TabhomePageModule)
      },
      {
        path: 'evenements',
        loadChildren: () =>
          import('../tabEvenements/tabEvenements.module').then(m => m.TabEvenementsPageModule)
      },
      {
        path: 'mes-evenements',
        loadChildren: () =>
          import('../tabEvenements/tabmesevenements/tabmesevenements.module').then(m => m.TabmesevenementsPageModule)
      },
      {
        path: 'messagerie',
        loadChildren: () =>
          import('../tabmessages/tabmessages.module').then(m => m.TabmessagesPageModule)
      },
      {
        path: 'social',
        loadChildren: () =>
          import('../tabsocial/tabsocial.module').then(m => m.TabsocialPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}