import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { throwIfEmpty } from 'rxjs/operators'
import { NoticiaService } from 'src/app/services/noticia.service'
import { INoticia } from '../interfaces/i-noticias'
import { IRespuesta } from '../interfaces/i-respuesta'

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: [
  ]
})
export class NoticiasComponent implements OnInit {

  noticias: INoticia[] = [];
  registrosPorPAgina: number
  registroComplato: boolean

  constructor(public noticiaService: NoticiaService, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.noticiaService.noticiaCompleta = false
    this.getNoticias()
  }

  getNoticias() {
    this.noticiaService.getUltimasNoticias()
      .subscribe((resp: IRespuesta) => {
        this.noticias = resp.noticias
        // Funcionamiento para paginacion
        this.registrosPorPAgina = resp.registrosPorPagina
        const cantidadRegistros = Math.ceil(resp.totalRegistros / this.registrosPorPAgina)
        if (cantidadRegistros === this.noticiaService.numPagina) {
          this.registroComplato = true
        } else {
          this.registroComplato = false
        }
      })
  }

  mostrarNoticia(noticia: any) {
    this.noticiaService.noticiaSeleccionada = noticia
    this.noticiaService.noticiaCompleta = true
    this.router.navigateByUrl('noticiaCompleta')

  }

  cambiarPagina(accion: any) {
    this.noticiaService.getNoticiasPaginadas(accion)
      .subscribe((resp: IRespuesta) => {
        this.noticias = resp.noticias

        // Funcionamiento para paginacion
        this.registrosPorPAgina = resp.registrosPorPagina
        const cantidadRegistros = Math.ceil(resp.totalRegistros / this.registrosPorPAgina)
        if (cantidadRegistros === this.noticiaService.numPagina) {
          this.registroComplato = true
        } else {
          this.registroComplato = false
        }
      })
  }

}
