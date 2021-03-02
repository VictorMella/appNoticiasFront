import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensajesRoutingModule } from './mensajes-routing.module';
import { MensajesComponent } from './mensajes.component';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module'


@NgModule({
  declarations: [MensajesComponent],
  imports: [
    CommonModule,
    MensajesRoutingModule,
    PipesModule
  ]
})
export class MensajesModule { }
