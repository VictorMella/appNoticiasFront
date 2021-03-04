import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service'
import { ModalService } from 'src/app/services/modal.service';
import { UsuarioService } from 'src/app/services/usuario.service'
import Swal from 'sweetalert2';

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  // showMenu: boolean = true
  // showMenuInit: boolean = true
  ojo = true;
  login1: boolean;
  input1: boolean;
  pass = '60356c4017aa164c0c6a8b44';
  totalMenajes: number;

  constructor(public modalService: ModalService,
              public mensajeService: MensajesService,
              private usuarioService: UsuarioService) {
    this.modalService.ojo2 = true;
  }

  ngOnInit(): void {
  }

  cerrarNav() {
    $('.navbar-collapse').collapse('hide');
    this.login1 = false;
    this.input1 = false;
  }

  alerta() {
    $('#alerta').modal();
    this.cerrarNav();
  }

  entrar() {
    this.login1 = false;
    this.input1 = true;

    $(document).ready(() => {
      $('#focusClave').trigger('focus');
    });
    $('[data-toggle="tooltip"]').tooltip('hide');
  }

  accion1() {
    this.ojo = false;
    this.login1 = false;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  accion2() {
    this.ojo = true;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
    this.login1 = true;
    this.modalService.ojo2 = false;
  }

  inputLogin() {
    if (this.pass !== this.usuarioService.pass) {
      this.login1 = false;
      this.input1 = false;
      // this.pass = '';
      this.cerrarNav();
    } else {
      this.login1 = false;
      this.input1 = false;
      // this.pass = '';
      this.cerrarNav();
      $('#loginModal').modal();
      $(document).ready(() => {
        $('#loginModal').on('shown.bs.modal', () => {
          $('#focusLogin').trigger('focus');
        });
      });
    }
  }

 logOut(){
   this.usuarioService.logOut()
   this.cerrarNav();
   this.modalService.logOut();
   const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
  });

   Toast.fire({
    title: `Estas offline`,
    background: 'rgb(233,233,0)',
    icon: 'success',
  });
 }
}
