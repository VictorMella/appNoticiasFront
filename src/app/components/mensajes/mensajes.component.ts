import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MensajesService } from 'src/app/services/mensajes.service'
import Swal from 'sweetalert2'
import { IMensaje } from '../interfaces/i-mensajes'
import { IRespuestaMensaje } from '../interfaces/i-respuesta-mensajes'

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: [
  ]
})
export class MensajesComponent implements OnInit {
  mensajesEmail: IMensaje[] = []
  totalMenajes: number;


  constructor(private mensajeService: MensajesService,
              private router: Router,) { }

  ngOnInit(): void {
    this.getMensajes();
    window.scrollTo(0, 0);
  }

  getMensajes() {
    this.mensajeService.getContactos()
      .subscribe((resp: IRespuestaMensaje) => {
        if (resp.ok) {
          this.mensajesEmail = resp.mensajes;
          this.totalMenajes = resp.totalRegistros;
          this.mensajeService.setTotalMensajes(this.totalMenajes)
          if (this.mensajesEmail.length === 0) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'center',
              showConfirmButton: true,
              customClass: {
                confirmButton: 'back9'
              }
            })
            Toast.fire({
              title: 'No se registran mensajes',
              background: 'rgb(233,233,0)'
            })
            .then(()=> {
              this.router.navigateByUrl('inicio')
            })
          }
        }
      })
  }

  // tslint:disable-next-line: variable-name
  deleteMensaje(_id: IMensaje) {
    this.mensajeService.deleteMensaje(_id)
      .subscribe((resp: any) => {
        if (resp.ok) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 3000
          })
          Toast.fire({
            title: resp.mensaje,
            background: 'rgb(233,233,0)'
          })
          this.getMensajes()
        }
      })
  }

}
