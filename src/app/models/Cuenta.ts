import { Contrato } from './Contrato';

export interface Cuenta {
  idCuenta: string;
  idCliente: string;
  saldo: number;
  contrato: Contrato;
}
