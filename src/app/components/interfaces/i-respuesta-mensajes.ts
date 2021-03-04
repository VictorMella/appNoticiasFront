import { IMensaje } from './i-mensajes'

export interface IRespuestaMensaje {
  ok: boolean
  totalRegistros: number
  mensajes: IMensaje[]
}
