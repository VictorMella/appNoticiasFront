import { Component, OnInit } from '@angular/core';

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
  pass = '';

  constructor() {}

  ngOnInit(): void {}

  cerrarNav() {
    $('.navbar-collapse').collapse('hide');
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
  }

  inputLogin() {
    if (this.pass !== '1234') {
      this.login1 = false;
      this.input1 = false;
      this.pass = '';
      this.cerrarNav();
    } else {
      this.login1 = false;
      this.input1 = false;
      this.pass = '';
      this.cerrarNav();
      $('#loginModal').modal();
      $(document).ready(() => {
        $('#loginModal').on('shown.bs.modal', () => {
          $('#focusLogin').trigger('focus');
        });
      });
    }
  }
}
