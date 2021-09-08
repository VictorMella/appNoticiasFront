import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ImagenesYoService } from 'src/app/services/imagenes-yo.service'
import { MainFactoryService } from 'src/app/services/main-factory.service'
import { environment } from 'src/environments/environment'
import { IFoto } from '../interfaces/i-fotos'
declare let $: any

const URL = environment.url
@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styles: [
  ]
})
export class AjustesComponent implements OnInit {
  loader = true
  fotosSeleccionada: IFoto
  imagenes = []
  imagenesUP = []
  cargaInicial = true

  constructor(public imagenesYo: ImagenesYoService,
    public mainFactory: MainFactoryService,
    private router: Router,
    private cdRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {

    $(() => {
      $('[data-toggle="tooltip"]').tooltip()
    })

    setTimeout(() => {
      $(() => {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });
    }, 150);

    this.mainFactory.loadingGlobalData$
      .subscribe((active) => {
        if (active) {
          this.imagenesYo.isLoader = true
        } else {
          this.getImagenes()
        }
      })

    this.mainFactory.loadingReloadData$
      .subscribe((active) => {
        if (active) {
          this.imagenes = this.imagenes.map(item => {
            item.nombre = null
            item.img = null
            return item
          })
          this.reloadCurrentRoute()
        }
      })
  }
  // reload () { this.ngOnInit(); }
  reloadCurrentRoute() {
    // const newUrl = this.router.routerState.snapshot.url;
    // this.router.navigateByUrl('/inicio', {skipLocationChange: true})
    // .then(() => {
    //     this.router.navigate([newUrl]);
    //     console.log(newUrl);
    //     this.mainFactory.activeLoadingReloadData(false)
    //     this.mainFactory.activeLoadingGlobalData(false)
    // });
        this.mainFactory.activeLoadingReloadData(false)
        this.mainFactory.activeLoadingGlobalData(false)
    this.ngOnInit();
  }

  getImagenes() {
    // this.imagenes = []
    this.imagenesYo.getImagenesService()
      .subscribe((resp: any) => {
        this.imagenesYo.isLoader = false
        resp.imagenes = resp.imagenes.map(item => {
          item.nombre = `${URL}/uploadYo/victorMella/${item.img}/victorMella`
          return item
        })
        this.cdRef.detectChanges();
        setTimeout(() => {
          this.imagenes = [...resp.imagenes];
        }, 1000);
        this.cargaInicial = true
      })

  }

  getImagenesUpdate() {
    this.imagenesUP = []
    this.imagenes = []
    this.imagenesYo.getImagenesService()
      .subscribe((resp: any) => {
        resp.data = resp.imagenes.map(item => {
          item.nombre = `${URL}/uploadYo/victorMella/${item.img}/victorMella`
          return item
        })
        this.imagenesUP = [...resp.data]
        this.cargaInicial = false
        this.imagenesYo.isLoader = false
      })
  }

  private ocultarTooltip() {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip('hide')
    })
  }

  editarImagen(img: IFoto) {
    this.fotosSeleccionada = img
    if (this.fotosSeleccionada.nombre === this.imagenesYo.v1) {
      this.imagenesYo.imagenNombre = 'v1.jpeg'
      this.imagenesYo.imagenPath = this.fotosSeleccionada.nombre
      $('#imagen').modal()
      this.ocultarTooltip()
    }
    if (this.fotosSeleccionada.nombre === this.imagenesYo.v2) {
      this.imagenesYo.imagenNombre = 'v2.jpeg'
      this.imagenesYo.imagenPath = this.fotosSeleccionada.nombre
      $('#imagen').modal()
      this.ocultarTooltip()
    }
    if (this.fotosSeleccionada.nombre === this.imagenesYo.v3) {
      this.imagenesYo.imagenNombre = 'v3.jpeg'
      this.imagenesYo.imagenPath = this.fotosSeleccionada.nombre
      $('#imagen').modal()
      this.ocultarTooltip()
    }
    if (this.fotosSeleccionada.nombre === this.imagenesYo.v4) {
      this.imagenesYo.imagenNombre = 'v4.jpeg'
      this.imagenesYo.imagenPath = this.fotosSeleccionada.nombre
      $('#imagen').modal()
      this.ocultarTooltip()
    }
  }

}
