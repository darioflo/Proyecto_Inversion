import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Inversion } from '../models/Inversión';
import { Cuenta } from '../models/Cuenta';
import { Contrato } from '../models/Contrato';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root',
})
export class InversionesBDService implements InMemoryDbService {
  createDb() {
    const contratos: Contrato[] = [
      {
        idContrato: 'Contrato-001',
        tipoContrato: 'Cuenta de ahorro',
      },
      {
        idContrato: 'Contrato-002',
        tipoContrato: 'Crédito',
      },
      {
        idContrato: 'Contrato-003',
        tipoContrato: 'Cuenta de ahorro',
      },
      {
        idContrato: 'Contrato-004',
        tipoContrato: 'Crédito',
      },
      {
        idContrato: 'Contrato-005',
        tipoContrato: 'Servicios financieros',
      },
      {
        idContrato: 'Contrato-006',
        tipoContrato: 'Cuenta de ahorro',
      },
    ];

    const cuentas: Cuenta[] = [
      {
        idCuenta: 'CUENTA-001',
        idCliente: 'Cliente-001',
        monto: 10000,
        contrato: contratos[0],
      },
      {
        idCuenta: 'CUENTA-002',
        idCliente: 'Cliente-001',
        monto: 8000,
        contrato: contratos[1],
      },
      {
        idCuenta: 'CUENTA-003',
        idCliente: 'Cliente-002',
        monto: 18000,
        contrato: contratos[2],
      },
      {
        idCuenta: 'CUENTA-004',
        idCliente: 'Cliente-002',
        monto: 25000,
        contrato: contratos[3],
      },
      {
        idCuenta: 'CUENTA-005',
        idCliente: 'Cliente-003',
        monto: 15000,
        contrato: contratos[4],
      },
      {
        idCuenta: 'CUENTA-005',
        idCliente: 'Cliente-003',
        monto: 12000,
        contrato: contratos[5],
      },
    ];
    const clientes: Cliente[] = [
      {
        idCliente: 'Cliente-001',
        nombre: 'Juan',
        apellidos: 'Cuesta',
        direccion: 'CDMX',
        cuenta: [cuentas[0], cuentas[1]],
      },
      {
        idCliente: 'Cliente-002',
        nombre: 'Emilio',
        apellidos: 'Delgado',
        direccion: 'CDMX',
        cuenta: [cuentas[2], cuentas[3]],
      },
      {
        idCliente: 'Cliente-003',
        nombre: 'Paloma',
        apellidos: 'Hurtado',
        direccion: 'CDMX',
        cuenta: [cuentas[4], cuentas[5]],
      },
    ];

    const inversiones: Inversion[] = [
      {
        idInversion: 'Inversion-001',
        nombre: 'Futuro Seguro',
        cliente: clientes[0],
        cuenta: cuentas[0],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-002',
        nombre: 'Visionario 360',
        cliente: clientes[0],
        cuenta: cuentas[0],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-003',
        nombre: 'Capital Zenith',
        cliente: clientes[0],
        cuenta: cuentas[0],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-004',
        nombre: 'Impulso Capital',
        cliente: clientes[1],
        cuenta: cuentas[1],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-005',
        nombre: 'Avance Dinámico',
        cliente: clientes[1],
        cuenta: cuentas[1],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-006',
        nombre: 'Rendimiento Uno',
        cliente: clientes[1],
        cuenta: cuentas[1],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-007',
        nombre: 'Meta Plus',
        cliente: clientes[2],
        cuenta: cuentas[2],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-008',
        nombre: 'Inversion Prisma',
        cliente: clientes[2],
        cuenta: cuentas[2],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-009',
        nombre: 'Valor Constante',
        cliente: clientes[2],
        cuenta: cuentas[2],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
    ];
    return { inversiones, clientes };
  }
}
