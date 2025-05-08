import { Cliente } from './Cliente';
import { Cuenta } from './Cuenta';

export interface Inversion {
  idInversion: string;
  nombre: string;
  cliente: Cliente;
  cuenta: Cuenta;
  monto: number;
  plazo: number;
  tasa: number;
  rendimiento: number;
  instruccionVencimiento:
    | 'reinvertirGanancia'
    | 'reinvertirInversion'
    | 'reembolsoTotal'
    | '';
}
