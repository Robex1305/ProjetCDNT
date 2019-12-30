import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsocialPage } from './tabsocial.page';

const routes: Routes = [
  {
    path: 'tabsocial',
    component: TabsocialPage,
    children: [
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/social/main/main.module').then(m => m.MainPageModule)
          }
        ]
      },
      {
        path: 'finder',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/social/finder/finder.module').then(m => m.FinderPageModule)
          }
        ]
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
export class TabsocialPageRoutingModule {}
