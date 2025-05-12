import { Cuenta } from './Cuenta';

export interface Cliente {
  idCliente: string;
  nombre: string;
  apellidos: string;
  direccion: string;
  cuenta: Cuenta[];
}
