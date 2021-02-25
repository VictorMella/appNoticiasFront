import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment'
import { ISobreMi } from '../components/interfaces/i-sobreMi'
import { ITecnologias } from '../components/interfaces/i-tecnologias'

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TecnologiasSobreMiService {
  tecnologias: ITecnologias ;
  sobreMi: ISobreMi;

  constructor(private http: HttpClient) { }

  getTecnologia(){
    if (this.tecnologias) {
      return of(this.tecnologias);
    } else {
      return this.http
        .get(`${URL}/tecnologias`)
        .pipe(tap((resp: ITecnologias) => {
          (this.tecnologias = resp);
        }));
    }
  }

  getSobreMi(){
    if (this.sobreMi) {
      return of(this.sobreMi);
    } else {
      return this.http
        .get(`${URL}/sobreMi`)
        .pipe(tap((resp: ISobreMi) => {
          (this.sobreMi = resp);
        }));
    }
  }
}
