import {
  NgModule
} from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';
import {
  Guardian
} from 'src/services/Guardian';

const routes: Routes = [{
    path: '',
    canActivate: [Guardian],
    children: [{
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

    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/connexion/page-log-in/page-log-in.module').then(m => m.PageLogInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/connexion/page-register/page-register.module').then(m => m.PageRegisterPageModule)
  },
  {
    path: "**", redirectTo: "home"
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}