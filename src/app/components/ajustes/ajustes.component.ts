import { Component, OnInit } from '@angular/core';
import { ImagenesYoService } from 'src/app/services/imagenes-yo.service'
import { IFoto } from '../interfaces/i-fotos'
declare let $: any;
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
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  editarImagen(img: IFoto){
  this.fotosSeleccionada = img;

  }

}
