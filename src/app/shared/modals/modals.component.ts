import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { IRespuestaMensaje } from 'src/app/components/interfaces/i-respuesta-mensajes'
import { MensajesService } from 'src/app/services/mensajes.service'
import { UsuarioService } from 'src/app/services/usuario.service'
import Swal from 'sweetalert2'
import { ModalService } from '../../services/modal.service'
declare let $
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
    nombre: 'victorMella',
    password: '123456',
  };

  constructor(public modalService: ModalService,
    private usuarioService: UsuarioService,
    private mensajeService: MensajesService) {
    this.modalService.privacidadSeleccionada = true
  }

  ngOnInit(): void { }

  politicaPrivacidad() {
    this.modalService.politicaPrivacidad()
  }

  cambioPrivacidad() {
    this.modalService.cambioPrivacidad()
  }

  contacto() {
    this.modalService.contacto()
  }

  contactoVictor(f: NgForm) {
    if (f.invalid) {
      $('#contacto').modal('hide')
      this.limpiarForm()
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
      })

      Toast.fire({
        title: 'Todos los campos son obligatorios',
        background: 'rgb(233,233,0)',
        icon: 'error',
      })
    } else {
      this.mensajeService.crearMensaje(this.mensaje.email, this.mensaje.mensaje)
      $('#contacto').modal('hide')

      this.limpiarForm()
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
      })
      Toast.fire({
        title: 'Mensaje enviaro correctamente',
        background: 'rgb(233,233,0)',
        icon: 'success',
      })

    }
  }

  limpiarForm() {
    this.mensaje.mensaje = ''
    this.mensaje.email = ''
  }

  async login(forma: NgForm) {
    if (forma.invalid) {
      this.salirLogin()
    }

    const usuarioValido = await this.usuarioService.login(this.usuarioLogin.nombre, this.usuarioLogin.password)
    if (usuarioValido) {
      sessionStorage.setItem('usuario', this.usuarioLogin.nombre)
      this.usuarioService.autentificado = true
      this.salirLogin()
      this.limpiarUsuario()
      this.modalService.online = true
      setTimeout(() => {
        $('.navbar-collapse').collapse('hide')
      }, 500)

      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      })

      Toast.fire({
        title: `${this.usuarioLogin.nombre} esta online`,
        background: 'rgb(233,233,0)',
        icon: 'success',
      })
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
      })

      Toast.fire({
        title: `${this.usuarioLogin.nombre}, tu usuario o password es incorrectos`,
        background: 'rgb(233,233,0)',
        icon: 'error',
      })
      $('.navbar-collapse').collapse('hide')
      this.salirLogin()
      this.limpiarUsuario()
      this.refreshLogin()
    }

  }

  salirLogin() {
    $('#loginModal').modal('hide')
  }

  limpiarUsuario() {
    this.usuarioLogin.nombre = ''
    this.usuarioLogin.password = ''
  }

  refreshLogin() {
    setTimeout(() => {
      this.modalService.online = false
      this.modalService.ojo2 = true
    }, 50000)
  }

}
