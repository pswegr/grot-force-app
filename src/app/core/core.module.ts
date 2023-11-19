import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';

const components = [ToolbarComponent];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports: [
    components
  ]
})
export class CoreModule { }
