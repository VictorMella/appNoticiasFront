import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util'
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
anio = null
  constructor() { }

  ngOnInit(): void {
    this.getYear()
  }

  whatsApp(){

  }

  getYear(){
    const year = new Date()
    this.anio = moment(year).format('YYYY')
  }

}
