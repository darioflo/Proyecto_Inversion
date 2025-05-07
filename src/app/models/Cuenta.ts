import { Contrato } from './Contrato';

export interface Cuenta {
  idCuenta: string;
  idCliente: string;
  monto: number;
  contrato: Contrato;
}
