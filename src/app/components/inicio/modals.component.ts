import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service'
declare let $;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {
  // mostrar1 = true;
  // mostrar2 = false;
  // mostrar3 = false;
  // clase1 = 'btn-warning';
  // clase2 = 'btn-outline-warning';
  // clase3 = 'btn-outline-warning';

  constructor(public modalService: ModalService) { }

  ngOnInit(): void { }

  cerrarTect(){
    $('#modalTecnologias').modal('hide');
    setTimeout(() => {
      this.modalService.pagina(1);
    }, 500);
  }

  verPagina(pagina: number){
    this.modalService.pagina(pagina);

  }



}
