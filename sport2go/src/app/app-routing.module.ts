import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabsocial/tabsocial.module').then(m => m.TabsocialPageModule)
  },
  {
    path: 'evenement/details/:evenementId',
    loadChildren: () => import('./pages/page-details-evenement/page-details-evenement.module').then(m => m.PageDetailsEvenementPageModule)
  },
  {
    path: 'evenement/new',
    loadChildren: () => import('./pages/page-nouvel-evenement/page-nouvel-evenement.module').then(m => m.PageNouvelEvenementPageModule),
  },
  {
    path: 'evenements',
    loadChildren: () => import('./tabEvenements/tabEvenements.module').then(m => m.TabEvenementsPageModule)
  },
  { path: 'page-details-evenement', loadChildren: './pages/page-details-evenement/page-details-evenement.module#PageDetailsEvenementPageModule' },
  { path: 'page-nouvel-evenement', loadChildren: './pages/page-nouvel-evenement/page-nouvel-evenement.module#PageNouvelEvenementPageModule' },
  { path: 'tabEvenements', loadChildren: './tabEvenements/tabEvenements.module#TabEvenementsPageModule' },
  { path: 'page-logo', loadChildren: './pages/connexion/page-logo/page-logo.module#PageLogoPageModule' },
  { path: 'page-log-in', loadChildren: './pages/connexion/page-log-in/page-log-in.module#PageLogInPageModule' },
  { path: 'page-register', loadChildren: './pages/connexion/page-register/page-register.module#PageRegisterPageModule' },
  { path: 'page-profil', loadChildren: './pages/page-profil/page-profil.module#PageProfilPageModule' },
  { path: 'tabsocial', loadChildren: './tabsocial/tabsocial.module#TabsocialPageModule' },
  { path: 'main', loadChildren: './pages/social/main/main.module#MainPageModule' },
  { path: 'finder', loadChildren: './pages/social/finder/finder.module#FinderPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}