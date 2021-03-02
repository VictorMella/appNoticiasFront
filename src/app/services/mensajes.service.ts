import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IRespuestaMensaje } from '../components/interfaces/i-respuesta-mensajes'
import { IMensaje } from '../components/interfaces/i-mensajes'

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

 mensajes: IRespuestaMensaje;
  constructor(private http: HttpClient) { }


  getTecnologia(){
    return this.http.get(`${URL}/contacto`)
    // if (this.mensajes) {
    //   return of(this.mensajes);
    // } else {
    //   return this.http
    //     .get(`${URL}/contacto`)
    //     .pipe(tap((resp: IRespuestaMensaje) => {
    //       (this.mensajes = resp);
    //     }));
    // }
  }

  deleteMensaje(_id: IMensaje){
     return this.http.delete(`${URL}/contacto/${_id}`)
  }
}
