import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ImagenesYoService } from 'src/app/services/imagenes-yo.service'
import { ModalService } from 'src/app/services/modal.service'
import { NoticiaService } from 'src/app/services/noticia.service'
import { INoticia } from '../interfaces/i-noticias'
import { IRespuesta } from '../interfaces/i-respuesta'
declare let $
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {
  mostrarYo: boolean;
  noticias: INoticia[] = []
  constructor(public modalService: ModalService,
              public noticiaService: NoticiaService,
              private router: Router,
              public imagenesYoService: ImagenesYoService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.noticiaService.noticiaCompleta = false
    setTimeout(() => {
      $(() => {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });
    }, 150);

    // Obtener ultimas 3 noticias
    this.getUltimasNoticias();
  }

  getUltimasNoticias(){
    this.noticiaService.getUltimasNoticias()
    .subscribe((resp: IRespuesta) => {
     this.noticias.push( ...resp.noticias.slice(0, 3))
    })
  }

  yoMostrar() {
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias(tab: number) {
    this.modalService.pagina(tab)
    $('#modalTecnologias').modal()
  }

  sobreMi() {
    $('#sobreMi').modal()
  }

  mostrarNoticia(noticia: INoticia) {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip('hide')
    })
    this.noticiaService.noticiaSeleccionada = noticia;
    setTimeout(() => {
      this.noticiaService.noticiaCompleta = true
      this.router.navigateByUrl('noticiaCompleta')
    }, 150)
  }

}
