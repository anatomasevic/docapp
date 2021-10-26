import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './auth/authentication.guard';



const routes: Routes = [
  {
    path: 'start-search',
    loadChildren: () => import('./start-search/start-search.module').then( m => m.StartSearchPageModule),
    canLoad: [AuthenticationGuard]
  },
  {
    path: '',
    redirectTo: 'start-search',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./auth/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./auth/log-in/log-in.module').then( m => m.LogInPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
