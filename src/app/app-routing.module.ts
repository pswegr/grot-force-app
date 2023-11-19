import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule),
    data: {
      preload: false
    }
  },
  {
    path: 'mini-apps',
    loadChildren: () => import('./mini-apps/mini-apps.module').then(m => m.MiniAppsModule),
    data: {
      preload: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
