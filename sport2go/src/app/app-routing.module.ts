import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'page-details-evenement', loadChildren: './tabEvenements/page-details-evenement/page-details-evenement.module#PageDetailsEvenementPageModule' },  { path: 'page-logo', loadChildren: './pages/connexion/page-logo/page-logo.module#PageLogoPageModule' },
  { path: 'page-log-in', loadChildren: './pages/connexion/page-log-in/page-log-in.module#PageLogInPageModule' },
  { path: 'page-register', loadChildren: './pages/connexion/page-register/page-register.module#PageRegisterPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
