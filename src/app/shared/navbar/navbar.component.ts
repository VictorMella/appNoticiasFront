import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = true
  showMenuInit: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  cerrarNav(){
    $('.navbar-collapse').collapse('hide')
   }

}
