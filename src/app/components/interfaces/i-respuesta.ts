import { INoticia } from './i-noticias'

export interface IRespuesta {
  ok: boolean
  pagina: number
  cantidadRegistros: number
  noticias: INoticia[]
}
