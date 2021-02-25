import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

const URL = environment.url
const numPagina = 1;

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  noticiaSeleccionada: any;
  noticiaCompleta = false;

  constructor(private http: HttpClient) { }

  getUltimasNoticias(){
    return this.http.get(`${URL}/noticias/?${numPagina}`)
  }



}
