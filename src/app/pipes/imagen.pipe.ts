import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment'

const URL = environment.url;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: object): string {
    console.log(`${URL}/uploadYo/victorMella/${img}/victorMella`)
    return `${URL}/uploadYo/victorMella/${img}/victorMella`;
  }

}
