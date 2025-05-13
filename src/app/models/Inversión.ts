import { Cliente } from './Cliente';
import { Cuenta } from './Cuenta';

export interface Inversion {
  idInversion: string;
  nombre: string;
  cliente: Cliente;
  cuenta: Cuenta;
  saldo_inicial: number;
  saldo_al_termino: number;
  plazo: number;
  tasa: number;
  rendimiento: number;
  instruccionVencimiento:
    | 'Reinvertir ganancia'
    | 'Reinvertir inversion'
    | 'Reembolso total'
    | '';
}
