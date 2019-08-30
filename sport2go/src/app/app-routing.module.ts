import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'page-details-evenement', loadChildren: './pages/page-details-evenement/page-details-evenement.module#PageDetailsEvenementPageModule' },
  { path: 'page-nouvel-evenement', loadChildren: './pages/page-nouvel-evenement/page-nouvel-evenement.module#PageNouvelEvenementPageModule' },
  { path: 'tabEvenements', loadChildren: './tabEvenements/tabEvenements.module#TabEvenementsPageModule' },
  { path: 'page-logo', loadChildren: './pages/connexion/page-logo/page-logo.module#PageLogoPageModule' },
  { path: 'page-log-in', loadChildren: './pages/connexion/page-log-in/page-log-in.module#PageLogInPageModule' },
  { path: 'page-register', loadChildren: './pages/connexion/page-register/page-register.module#PageRegisterPageModule' },
  { path: 'page-profil', loadChildren: './pages/page-profil/page-profil.module#PageProfilPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}