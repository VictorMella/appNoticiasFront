import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service'
declare let $;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {
  mostrarYo: boolean;
  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  yoMostrar() {
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias(tab: number){
    this.modalService.pagina(tab);
    $('#modalTecnologias').modal();
  }

  sobreMi(){
    $('#sobreMi').modal();
  }

}
