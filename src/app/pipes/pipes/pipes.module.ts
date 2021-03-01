import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenAutorPipe } from '../imagen-autor.pipe'
import { ImagenNoticiaPipe } from '../imagen-noticia.pipe'
import { FechaNoticiaPipe } from '../fecha-noticia.pipe'

@NgModule({
  declarations: [
    ImagenAutorPipe,
    ImagenNoticiaPipe,
    FechaNoticiaPipe
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ImagenAutorPipe,
    ImagenNoticiaPipe,
    FechaNoticiaPipe
  ]
})
export class PipesModule { }
