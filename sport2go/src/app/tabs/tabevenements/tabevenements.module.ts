import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabevenementsPage } from './tabevenements.page';

const routes: Routes = [
  {
    path: '',
    component: TabevenementsPage
    
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabevenementsPage]
})


export class TabevenementsPageModule {}
