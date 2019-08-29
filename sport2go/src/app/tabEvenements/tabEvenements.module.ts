import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabEvenementsPage } from './tabEvenements.page';

const routes: Routes = [
  {
    path: '',
    component: TabEvenementsPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabEvenementsPage }])
  ],
  declarations: [TabEvenementsPage]
})


export class TabEvenementsPageModule {}
