import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ModalService } from '../../services/modal.service';
declare let $;
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [],
})
export class ModalsComponent implements OnInit {
  mensaje = {
    email: '',
    mensaje: '',
  };

  usuarioLogin = {
    nombre: 'victor',
    password: '1234',
  };

  constructor(public modalService: ModalService) {
    this.modalService.privacidadSeleccionada = true;
  }

  ngOnInit(): void {}

  politicaPrivacidad() {
    this.modalService.politicaPrivacidad();
  }

  cambioPrivacidad() {
    this.modalService.cambioPrivacidad();
  }

  contacto() {
    this.modalService.contacto();
  }

  contactoVictor(f: NgForm) {
    if (f.invalid) {
      $('#contacto').modal('hide');
      this.limpiarForm();
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,

        timer: 3000,
        // timerProgressBar: true,
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', Swal.stopTimer)
        //   toast.addEventListener('mouseleave', Swal.resumeTimer)
        // }
      });

      Toast.fire({
        title: 'Todos los campos son obligatorios',
        background: 'rgb(233,233,0)',
        icon: 'error',
      });
    } else {
      $('#contacto').modal('hide');

      this.limpiarForm();
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,

        timer: 3000,
        // timerProgressBar: true,
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', Swal.stopTimer)
        //   toast.addEventListener('mouseleave', Swal.resumeTimer)
        // }
      });

      Toast.fire({
        title: 'Mensaje enviaro correctamente',
        background: 'rgb(233,233,0)',
        icon: 'success',
      });
    }
  }

  limpiarForm() {
    this.mensaje.mensaje = '';
    this.mensaje.email = '';
  }

  login(forma: NgForm) {
    if (
      this.usuarioLogin.nombre === 'victor' &&
      this.usuarioLogin.password === '1234'
    ) {
      this.salirLogin();
      setTimeout(() => {
        $('.navbar-collapse').collapse('hide');
      }, 500);

      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });

      Toast.fire({
        title: `${this.usuarioLogin.nombre} esta online`,
        background: 'rgb(233,233,0)',
        icon: 'success',
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      });

      Toast.fire({
        title: `${this.usuarioLogin.nombre}, tu usuario o password son incorrectos`,
        background: 'rgb(233,233,0)',
        icon: 'error',
      });
      this.salirLogin();
      $('.navbar-collapse').collapse('hide');
    }
  }

  salirLogin() {
    $('#loginModal').modal('hide');
  }
}
