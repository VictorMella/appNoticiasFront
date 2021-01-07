import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {

  constructor(public modalService: ModalService) {
    this.modalService.privacidadSeleccionada = true;
  }

  ngOnInit(): void { 
  }

  politicaPrivacidad() {
    this.modalService.politicaPrivacidad();
  }

  cambioPrivacidad() {
    this.modalService.cambioPrivacidad();
  }

  contacto() {
    this.modalService.contacto();
  }


}