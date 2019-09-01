import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabmesevenements',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabEvenements/tabmesevenements/tabmesevenements.module').then(m => m.TabmesevenementsPageModule)
          }
        ]
      },
      {
        path: 'tabEvenements',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabEvenements/tabEvenements.module').then(m => m.TabEvenementsPageModule)
          }
        ]
      },
      {
        path: 'tabhome',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabhome/tabhome.module').then(m => m.TabhomePageModule)
          }
        ]
      },
      {
        path: 'tabsocial',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabsocial/tabsocial.module').then(m => m.TabsocialPageModule)
          }
        ]
      },
      {
        path: 'tabmessages',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabmessages/tabmessages.module').then(m => m.TabmessagesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tabhome',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabhome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
