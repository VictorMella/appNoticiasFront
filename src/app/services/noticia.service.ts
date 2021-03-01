import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

const URL = environment.url
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  noticiaSeleccionada: any;
  noticiaCompleta = false;
  numPagina = 1;

  constructor(private http: HttpClient) { }

  getUltimasNoticias(){
    return this.http.get(`${URL}/noticias/?pagina=${this.numPagina}`)
  }

  getNoticiasPaginadas(accion: any){
    if (accion === '+'){
      this.numPagina ++;
    }else {
      if(this.numPagina <= 1){
        this.numPagina = 1;
      }else {
        this.numPagina --;
      }
    }
    return this.http.get(`${URL}/noticias/?pagina=${this.numPagina}`)
  }



}
