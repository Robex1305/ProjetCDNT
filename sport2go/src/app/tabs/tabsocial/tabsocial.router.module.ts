import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsocialPage } from './tabsocial.page';

const routes: Routes = [
  {
    path: 'tabsocial',
    component: TabsocialPage,
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
