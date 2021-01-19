import { ModalService } from 'src/app/services/modal.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
declare let $: any;
import Swal from 'sweetalert2'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
anio = null;
constructor(public modalService: ModalService) {
  this.modalService.privacidad = true;
}


  ngOnInit(): void {
    this.getYear();
  }

  whatsApp(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: true,
      customClass: {
        confirmButton: 'back9'
      }
     })
    Toast.fire({
      title: '+5694569138',
      background: 'rgb(233,233,0)'
    })

  }
  salir(){
    setTimeout(() => {
      $('#privacidad').modal('hide');
    }, 300);
  }

  privacidad() {
    this.modalService.privacidad = true;
    $('#privacidad').modal();
  }

  getYear(){
    const year = new Date();
    this.anio = moment(year).format('YYYY');
  }

  irAlerta() {
    $('#privacidad').modal('hide');
    setTimeout(() => {
      $('#alerta').modal();
    }, 500);
  }

}
