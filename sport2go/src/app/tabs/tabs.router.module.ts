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

const routes: Routes = [{
    path: '',
    loadChildren: 'home',
    component: TabsPage,
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
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}