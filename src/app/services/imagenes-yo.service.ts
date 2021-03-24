import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class ImagenesYoService {

  imagenNombre: string
  imagenPath: string
  verNombre = false;
  imagenUpload: File
  imagenSeleccionada: string | ArrayBuffer
  imagenes = [];
  isLoader = false

  v1: string
  v2: string
  v3: string
  v4: string

  constructor(private http: HttpClient) {
    this.getImagenes()
  }


  getImagenes() {
    return this.http.get(`${URL}/uploadYo`)
      .subscribe((resp: any) => {
        this.v1 = `${URL}/uploadYo/victorMella/${resp.imagenes[0].img}/victorMella`
        this.v2 = `${URL}/uploadYo/victorMella/${resp.imagenes[1].img}/victorMella`
        this.v3 = `${URL}/uploadYo/victorMella/${resp.imagenes[2].img}/victorMella`
        this.v4 = `${URL}/uploadYo/victorMella/${resp.imagenes[3].img}/victorMella`

        this.imagenes = [
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
      })
  }

  getImagenesService() {
    return this.http.get(`${URL}/uploadYo`)
  }
}
