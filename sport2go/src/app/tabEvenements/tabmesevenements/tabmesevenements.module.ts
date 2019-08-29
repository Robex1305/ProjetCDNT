import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabmesevenementsPage } from './tabmesevenements.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabmesevenementsPage }])
  ],
  declarations: [TabmesevenementsPage]
})
export class TabmesevenementsPageModule {}
