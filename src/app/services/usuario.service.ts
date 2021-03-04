import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IRespuestaLogin } from '../components/interfaces/i-respuesta-login';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  autentificado = false; // GUARD
  pass = ''

  constructor(private http: HttpClient,
              private  router: Router) {
                this.getId()
               }

  login(nombre: string, password: string){
    const body = {nombre, password };
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise(resolve => {
      this.http.post(`${URL}/usuario/entrar`, body)
      .subscribe((resp: IRespuestaLogin) => {
        if (resp.ok){
          resolve (true);
          this.guardarToken(resp.token);
        }else {
          resolve (false);
          this.logOut();
        }
      });
    });
  }

  guardarToken(token: string){
    this.token = token;
    sessionStorage.setItem('token', this.token);
  }

  logOut(){
    this.token = null;
    this.autentificado = false;
    this.pass = '';
    sessionStorage.clear();
    this.router.navigateByUrl('inicio')
  }

  getId(){
    return this.http.get(`${URL}/sobreMi`)
    .pipe(
      pluck('sobreMiBD', '0', '_id')
    ).subscribe((resp: any)=>{
      this.pass = resp;
    })
  }

}
