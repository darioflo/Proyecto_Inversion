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
        idContrato: 'Contrato-002',
        tipoContrato: 'Servicios financieros',
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
        idCliente: 'Cliente-002',
        monto: 25000,
        contrato: contratos[1],
      },
      {
        idCuenta: 'CUENTA-002',
        idCliente: 'Cliente-002',
        monto: 5000,
        contrato: contratos[2],
      },
    ];
    const clientes: Cliente[] = [
      {
        idCliente: 'Cliente-001',
        nombre: 'Darío',
        apellidos: 'Fernandez La O',
        direccion: 'CDMX',
        cuenta: cuentas[0],
      },
      {
        idCliente: 'Cliente-002',
        nombre: 'Irving Ariel',
        apellidos: 'Díaz Lago',
        direccion: 'CDMX',
        cuenta: cuentas[1],
      },
      {
        idCliente: 'Cliente-003',
        nombre: 'Yissel',
        apellidos: 'Arce Padrón',
        direccion: 'CDMX',
        cuenta: cuentas[2],
      },
    ];

    const inversiones: Inversion[] = [
      {
        idInversion: 'Inversion-001',
        cliente: clientes[0],
        cuenta: cuentas[0],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: 'reinvertirGanancia',
      },
      {
        idInversion: 'Inversion-002',
        cliente: clientes[1],
        cuenta: cuentas[1],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: 'reembolsoTotal',
      },
      {
        idInversion: 'Inversion-003',
        cliente: clientes[2],
        cuenta: cuentas[2],
        monto: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: 'reinvertirInversion',
      },
    ];
    return { inversiones, clientes };
  }
}
