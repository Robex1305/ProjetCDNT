import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageDetailsEvenementPage } from './page-details-evenement.page';

const routes: Routes = [
  {
    path: '',
    component: PageDetailsEvenementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageDetailsEvenementPage]
})
export class PageDetailsEvenementPageModule {}
