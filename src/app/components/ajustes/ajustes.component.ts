import { Component, OnInit } from '@angular/core'
import { ImagenesYoService } from 'src/app/services/imagenes-yo.service'
import { IFoto } from '../interfaces/i-fotos'
declare let $: any
@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styles: [
  ]
})
export class AjustesComponent implements OnInit {

  fotosSeleccionada: IFoto

  constructor(public imagenesYo: ImagenesYoService) { }

  ngOnInit(): void {

    $(() => {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  private ocultarTooltip() {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip('hide')
    })
  }

  editarImagen(img: IFoto) {
    this.fotosSeleccionada = img;
    if (this.fotosSeleccionada.img === this.imagenesYo.v1) {
      this.imagenesYo.imagenNombre = 'v1.jpeg'
      this.imagenesYo.imagenPath = this.fotosSeleccionada.img;
      $('#imagen').modal()
      this.ocultarTooltip()
    }
    if (this.fotosSeleccionada.img === this.imagenesYo.v2) {
      this.imagenesYo.imagenNombre = 'v2.jpeg'
      this.imagenesYo.imagenPath = this.fotosSeleccionada.img;
      $('#imagen').modal()
      this.ocultarTooltip()
    }
    if (this.fotosSeleccionada.img === this.imagenesYo.v3) {
      this.imagenesYo.imagenNombre = 'v3.jpeg'
      this.imagenesYo.imagenPath = this.fotosSeleccionada.img;
      $('#imagen').modal()
      this.ocultarTooltip()
    }
    if (this.fotosSeleccionada.img === this.imagenesYo.v4) {
      this.imagenesYo.imagenNombre = 'v4.jpeg'
      this.imagenesYo.imagenPath = this.fotosSeleccionada.img;
      $('#imagen').modal()
      this.ocultarTooltip()
    }

  }

}
