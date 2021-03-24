import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjustesRoutingModule } from './ajustes-routing.module';
import { AjustesComponent } from './ajustes.component';
import { ModalsComponent } from './modals.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module'


@NgModule({
  declarations: [AjustesComponent, ModalsComponent, LoaderComponent],
  imports: [
    CommonModule,
    AjustesRoutingModule,
    PipesModule
  ]
})
export class AjustesModule { }
