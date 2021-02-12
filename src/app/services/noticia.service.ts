import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  noticiaSeleccionada: any;
  noticiaCompleta = false;

  constructor() { }


}
