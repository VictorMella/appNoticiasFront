import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenAutorPipe } from '../imagen-autor.pipe'
import { ImagenNoticiaPipe } from '../imagen-noticia.pipe'
import { FechaNoticiaPipe } from '../fecha-noticia.pipe'
import { ImagenPipe } from '../imagen.pipe'

@NgModule({
  declarations: [
    ImagenAutorPipe,
    ImagenNoticiaPipe,
    FechaNoticiaPipe,
    ImagenPipe
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ImagenAutorPipe,
    ImagenNoticiaPipe,
    FechaNoticiaPipe,
    ImagenPipe
  ]
})
export class PipesModule { }
