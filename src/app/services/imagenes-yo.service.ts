import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class ImagenesYoService {
  v1 = `${URL}/uploadYo/victorMella/v1.jpeg/victorMella`;
  v2 = `${URL}/uploadYo/victorMella/v2.jpeg/victorMella`;
  v3 = `${URL}/uploadYo/victorMella/v3.jpeg/victorMella`;
  v4 = `${URL}/uploadYo/victorMella/v4.jpeg/victorMella`;

  constructor() { }

  imagenes = [
    {
      img: this.v1
    },
    {
      img: this.v3
    },
    {
      img: this.v2
    },
    {
      img: this.v4
    },
  ]
}
