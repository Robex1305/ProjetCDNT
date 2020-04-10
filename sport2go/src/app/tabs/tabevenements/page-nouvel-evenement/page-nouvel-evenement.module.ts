import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageNouvelEvenementPage } from './page-nouvel-evenement.page';
import { TabevenementsPage } from '../tabevenements.page';

const routes: Routes = [
  {
    path: '',
    component: PageNouvelEvenementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageNouvelEvenementPage]
})
export class PageNouvelEvenementPageModule {}
