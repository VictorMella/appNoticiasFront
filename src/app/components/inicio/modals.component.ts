import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service'
import { TecnologiasSobreMiService } from 'src/app/services/tecnologias-sobre-mi.service'
import { ISobreMi } from '../interfaces/i-sobreMi'
import { ITecnologias } from '../interfaces/i-tecnologias'
declare let $;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {
tecnologiasDestacadas: string[] = [];
tecTab1: string[] = [];
tecTab2: string[] = [];
tecTab3: string[] = [];
sobreMi: any;


  constructor(public modalService: ModalService,
              private tecnologiaService: TecnologiasSobreMiService) { }

  ngOnInit(): void {
    this.getTecnologias();
    this.getSobreMi();
   }

   getTecnologias(){
    this.tecnologiaService.getTecnologia()
    .subscribe((resp: ITecnologias) => {
      if (resp.ok){
        this.tecnologiasDestacadas = resp.tecnologiaBD;
        this.tecTab1 = this.tecnologiasDestacadas.slice(0, 3);
        this.tecTab2 = this.tecnologiasDestacadas.slice(3, 6);
        this.tecTab3 = this.tecnologiasDestacadas.slice(6, 9);
      }
    });
   }

   getSobreMi(){
    this.tecnologiaService.getSobreMi()
    .subscribe((resp: ISobreMi) => {
      if (resp.ok){
        this.sobreMi = resp.sobreMiBD[0];
      }
    });
   }

  cerrarTec(){
    $('#modalTecnologias').modal('hide');
    setTimeout(() => {
      this.modalService.pagina(1);
    }, 500);
  }

  verPagina(pagina: number){
    this.modalService.pagina(pagina);

  }

  cerrarSobreMi(){
    this.modalService.cerrarSobreMi();
  }



}
