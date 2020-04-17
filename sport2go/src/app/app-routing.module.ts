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
} from 'src/util/Guardian';

const routes: Routes = [{
    path: '',
    canActivate: [Guardian],
    children: [{
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
      },
      {
        path: 'evenements/details/:evenementId',
        loadChildren: () => import('./tabs/tabevenements/page-details-evenement/page-details-evenement.module').then(m => m.PageDetailsEvenementPageModule)
      },
      {
        path: 'evenements/new',
        loadChildren: () => import('./tabs/tabevenements/page-nouvel-evenement/page-nouvel-evenement.module').then(m => m.PageNouvelEvenementPageModule),
      }
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
    path: "**", 
    redirectTo: "home"
  },
  
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