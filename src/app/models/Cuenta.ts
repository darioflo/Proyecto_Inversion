import { Contrato } from './Contrato';
import { Inversion } from './Inversión';

export interface Cuenta {
  idCuenta: string;
  idCliente: string;
  saldo: number;
  contrato: Contrato;
  idInversion : string[] | null;
}
