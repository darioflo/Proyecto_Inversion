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
        idCuenta: 'CUENTA-001',
        tipoContrato: 'Cuenta de ahorro',
      },
      {
        idContrato: 'Contrato-002',
        idCuenta: 'CUENTA-002',
        tipoContrato: 'Crédito',
      },
      {
        idContrato: 'Contrato-003',
        idCuenta: 'CUENTA-003',
        tipoContrato: 'Cuenta de ahorro',
      },
      {
        idContrato: 'Contrato-004',
        idCuenta: 'CUENTA-004',
        tipoContrato: 'Crédito',
      },
      {
        idContrato: 'Contrato-005',
        idCuenta: 'CUENTA-005',
        tipoContrato: 'Servicios financieros',
      },
      {
        idContrato: 'Contrato-006',
        idCuenta: 'CUENTA-006',
        tipoContrato: 'Cuenta de ahorro',
      },
    ];

    const cuentas: Cuenta[] = [
      {
        idCuenta: 'CUENTA-001',
        idCliente: 'Cliente-001',
        saldo: 10000,
        contrato: contratos[0],
      },
      {
        idCuenta: 'CUENTA-002',
        idCliente: 'Cliente-001',
        saldo: 8000,
        contrato: contratos[1],
      },
      {
        idCuenta: 'CUENTA-003',
        idCliente: 'Cliente-002',
        saldo: 18000,
        contrato: contratos[2],
      },
      {
        idCuenta: 'CUENTA-004',
        idCliente: 'Cliente-002',
        saldo: 25000,
        contrato: contratos[3],
      },
      {
        idCuenta: 'CUENTA-005',
        idCliente: 'Cliente-003',
        saldo: 15000,
        contrato: contratos[4],
      },
      {
        idCuenta: 'CUENTA-005',
        idCliente: 'Cliente-003',
        saldo: 12000,
        contrato: contratos[5],
      },
    ];
    const clientes: Cliente[] = [
      {
        idCliente: 'Cliente-001',
        nombre: 'Juan',
        apellido_paterno: 'Cuesta',
        apellido_materno: 'Pastor',
        direccion: 'CDMX',
        cuenta: [cuentas[0], cuentas[1]],
      },
      {
        idCliente: 'Cliente-002',
        nombre: 'Emilio',
        apellido_paterno: 'Delgado',
        apellido_materno: 'Martínez',
        direccion: 'CDMX',
        cuenta: [cuentas[2], cuentas[3]],
      },
      {
        idCliente: 'Cliente-003',
        nombre: 'Paloma',
        apellido_paterno: 'Hurtado',
        apellido_materno: 'Morcillo',
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
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-002',
        nombre: 'Visionario 360',
        cliente: clientes[0],
        cuenta: cuentas[1],
        saldo_inicial: 0,
        saldo_al_termino: 0,
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
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-004',
        nombre: 'Impulso Capital',
        cliente: clientes[1],
        cuenta: cuentas[2],
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-005',
        nombre: 'Avance Dinámico',
        cliente: clientes[1],
        cuenta: cuentas[3],
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-006',
        nombre: 'Rendimiento Uno',
        cliente: clientes[1],
        cuenta: cuentas[2],
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-007',
        nombre: 'Meta Plus',
        cliente: clientes[2],
        cuenta: cuentas[4],
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-008',
        nombre: 'Inversion Prisma',
        cliente: clientes[2],
        cuenta: cuentas[5],
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
      {
        idInversion: 'Inversion-009',
        nombre: 'Valor Constante',
        cliente: clientes[2],
        cuenta: cuentas[4],
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
      },
    ];
    return { inversiones, clientes };
  }
}
