import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment'

const URL = environment.url;

@Pipe({
  name: 'imagenAutor'
})
export class ImagenAutorPipe implements PipeTransform {

  transform(img: string): string {
    return `${URL}/noticias/imgAutor/${img}`;
  }

}
