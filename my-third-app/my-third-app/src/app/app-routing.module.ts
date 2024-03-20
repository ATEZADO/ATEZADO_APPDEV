import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnotherPage } from './another-page/another.page';
import { AuthenticationService } from './authentication.service';
import { SharedPage } from './shared-page/custom.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'another-page',
    loadChildren: () => import ('./another-page/another.module').then( m=> m.AnotherPageModule),
    canActivate:[AuthenticationService]
  },
  {
    path: 'shared-page',
    component: SharedPage,
    canActivate:[AuthenticationService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
