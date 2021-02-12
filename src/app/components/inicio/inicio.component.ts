import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ModalService } from 'src/app/services/modal.service'
import { NoticiaService } from 'src/app/services/noticia.service'
declare let $
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {
  mostrarYo: boolean;
  constructor(public modalService: ModalService, public noticiaService: NoticiaService, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.noticiaService.noticiaCompleta = false;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    })
  }

  yoMostrar() {
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias(tab: number) {
    this.modalService.pagina(tab);
    $('#modalTecnologias').modal();
  }

  sobreMi() {
    $('#sobreMi').modal();
  }

  mostrarNoticia() {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip('hide');
    });
    setTimeout(() => {
      this.noticiaService.noticiaCompleta = true;
      this.router.navigateByUrl('noticiaCompleta');
    }, 150);
  }

}
