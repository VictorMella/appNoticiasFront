import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenAutorPipe } from '../imagen-autor.pipe'
import { ImagenNoticiaPipe } from '../imagen-noticia-pipe'

@NgModule({
  declarations: [
    ImagenAutorPipe,
    ImagenNoticiaPipe
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ImagenAutorPipe,
    ImagenNoticiaPipe
  ]
})
export class PipesModule { }
