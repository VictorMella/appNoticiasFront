import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { of } from 'rxjs'
import { tap } from 'rxjs/operators'
import { IRespuestaMensaje } from '../components/interfaces/i-respuesta-mensajes'
import { IMensaje } from '../components/interfaces/i-mensajes'
import { Router } from '@angular/router'

const URL = environment.url
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  mensajes: IRespuestaMensaje
  totalRegistros: number
  constructor(private http: HttpClient,
    private router: Router) {
    this.getContactosTotal()
  }

  getContactos() {
    return this.http.get(`${URL}/contacto`)
  }
  getContactosTotal() {
    return this.http.get(`${URL}/contacto`)
      .subscribe((resp: IRespuestaMensaje) => {
        if (resp.ok) {
          this.totalRegistros = resp.totalRegistros
        }
      })
  }

  deleteMensaje(_id: IMensaje) {
    return this.http.delete(`${URL}/contacto/${_id}`)
  }
  setTotalMensajes(registros: number) {
    this.totalRegistros = registros
    // this.getTotalMensajes()
  }

  getTotalMensajes() {
    return this.totalRegistros
  }

  crearMensaje(email: string, mensaje: string) {
    const body = { email, mensaje }
    const URL_MENSAJE = '/mensajes'
    const URL_INICIO = '/inicio'
    return this.http.post(`${URL}/contacto`, body).subscribe(() => {
      let newUrl = this.router.routerState.snapshot.url;

      if (newUrl === URL_MENSAJE) {
        this.router.navigateByUrl(URL_INICIO, { skipLocationChange: true })
        .then(() => {
          newUrl = newUrl.replace('/', '')
          this.router.navigate([newUrl])
        })
      } else {
        this.router.navigateByUrl(URL_MENSAJE, { skipLocationChange: true })
          .then(() => {
            this.getContactosTotal()
            newUrl = newUrl.replace('/', '')
            this.router.navigate([newUrl])
          })
      }

    })
  }
}
