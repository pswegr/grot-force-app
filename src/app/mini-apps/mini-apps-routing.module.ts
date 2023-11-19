import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniAppsComponent } from './mini-apps.component';
import { CircuitResolverComponent } from './circuit-resolver/circuit-resolver.component';

const routes: Routes = [
  {
    path: '',
    component: MiniAppsComponent,
    pathMatch: 'full'
  },
  {
    path: 'circuit-solver',
    component: CircuitResolverComponent,
    pathMatch: 'full',
    title: 'Circuit solver'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniAppsRoutingModule { }
