import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service'
import { INoticia } from '../interfaces/i-noticias'
import * as moment from 'moment';

@Component({
  selector: 'app-noticia-completa',
  templateUrl: './noticia-completa.component.html',
  styles: [
  ]
})
export class NoticiaCompletaComponent implements OnInit {
  noticia: INoticia;
  fechaNoticia: Date;

  constructor(public noticiaService: NoticiaService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.noticia = this.noticiaService.noticiaSeleccionada;
    // this.fechaNoticia = moment(this.noticia.created).format('DD-MM-YYYY');
    console.log(this.noticia)
  }

  back(){
    window.history.back();
  }

}
