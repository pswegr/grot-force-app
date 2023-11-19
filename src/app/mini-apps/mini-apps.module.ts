import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniAppsRoutingModule } from './mini-apps-routing.module';
import { CircuitResolverComponent } from './circuit-resolver/circuit-resolver.component';
import { MiniAppsComponent } from './mini-apps.component';
import { ResistorComponent } from './circuit-resolver/components/resistor/resistor.component';
import { VoltageSourceComponent } from './circuit-resolver/components/voltage-source/voltage-source.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MiniAppsComponent,
    CircuitResolverComponent,
    ResistorComponent,
    VoltageSourceComponent
  ],
  imports: [
    CommonModule,
    MiniAppsRoutingModule,
    SharedModule
  ]
})
export class MiniAppsModule { }
