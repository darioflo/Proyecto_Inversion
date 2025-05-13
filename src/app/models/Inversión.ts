import { Cliente } from './Cliente';
import { Cuenta } from './Cuenta';

export interface Inversion {
  idInversion: string;
  nombre: string;
  descripcion: string;
  cliente: Cliente | null;
  cuenta: Cuenta | null;
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
