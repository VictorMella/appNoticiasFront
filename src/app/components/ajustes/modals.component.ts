import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ImagenesYoService } from 'src/app/services/imagenes-yo.service'
import { MainFactoryService } from 'src/app/services/main-factory.service'
import { environment } from 'src/environments/environment'
import Swal from 'sweetalert2'
const URL = environment.url
declare let $

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {
  verImagenDefault = false;

  constructor(public imagenesYoService: ImagenesYoService,
              private router: Router,
              private http: HttpClient,
              public mainFactory: MainFactoryService) { }

  ngOnInit(): void {
  }

  seleccionImagen(data: any) {
    if (data) {
      this.imagenesYoService.imagenUpload = data
      const reader = new FileReader()
      reader.onload = () => this.imagenesYoService.imagenSeleccionada = reader.result
      reader.readAsDataURL(data)
      this.imagenesYoService.verNombre = true
      this.verImagenDefault = true
    }
  }

  limpiarImagen() {
    this.imagenesYoService.verNombre = false
  }

  actualizarImagen() {
    if (this.imagenesYoService.imagenNombre !== this.imagenesYoService.imagenUpload.name) {
      $('#imagen').modal('hide')
      this.limpiarImagen()
    } else {
      this.limpiarImagen()
      const headers = {
        miToken: sessionStorage.getItem('token')
      }
      // const usuario = sessionStorage.getItem('usuario')

      const formData = new FormData()
      formData.append('img',
        this.imagenesYoService.imagenUpload,
        this.imagenesYoService.imagenUpload.name)

      return this.http.post(`${URL}/uploadYo/update`, formData, { headers })
        .subscribe({
          next: (resp: any) => {
            this.mainFactory.activeLoadingGlobalData(true)
            setTimeout(() => {
              $('#imagen').modal('hide')
            }, 100)
            this.imagenesYoService.isLoader = true
            this.imagenesYoService.imagenSeleccionada = null
            const Toast = Swal.mixin({
              toast: true,
              position: 'center',
              showConfirmButton: true,
              customClass: {
                confirmButton: 'back9'
              }
            })
            Toast.fire({
              title: resp.mensaje,
              background: 'rgb(233,233,0)'
            })
            .then(() =>  this.mainFactory.activeLoadingReloadData(true))
            this.limpiarImagen()
          },
          error: (err: any) => console.log(err),
        })
    }
  }
}
