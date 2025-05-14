import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
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
        tipoContrato: 'Servicios financieros',
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
    ];
    const clientes: Cliente[] = [
      {
        idCliente: 'Cliente-001',
        nombre: 'Emilio',
        apellido_paterno: 'Delgado',
        apellido_materno: 'Martínez',
        direccion: 'CDMX',
        cuenta: [cuentas[0], cuentas[1]],
      },
    ];

    const inversiones: Inversion[] = [
      {
        idInversion: 'Inversion-001',
        nombre: 'Futuro Seguro',
        cliente: null,
        cuenta: null,
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
        descripcion: 'Inversión ideal para asegurar tu futuro financiero.',
      },
      {
        idInversion: 'Inversion-002',
        nombre: 'Visionario 360',
        cliente: null,
        cuenta: null,
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
        descripcion: 'Plan diseñado para los visionarios del mañana.',
      },
      {
        idInversion: 'Inversion-003',
        nombre: 'Capital Zenith',
        cliente: null,
        cuenta: null,
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
        descripcion: 'Maximiza tu capital con esta inversión estratégica.',
      },
      {
        idInversion: 'Inversion-004',
        nombre: 'Impulso Capital',
        cliente: null,
        cuenta: null,
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
        descripcion: 'Impulsa tu capital con rendimientos garantizados.',
      },
      {
        idInversion: 'Inversion-005',
        nombre: 'Avance Dinámico',
        cliente: null,
        cuenta: null,
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
        descripcion: 'Inversión dinámica para un crecimiento constante.',
      },
      {
        idInversion: 'Inversion-006',
        nombre: 'Rendimiento Uno',
        cliente: null,
        cuenta: null,
        saldo_inicial: 0,
        saldo_al_termino: 0,
        plazo: 0,
        tasa: 0,
        rendimiento: 0,
        instruccionVencimiento: '',
        descripcion: 'Obtén el mejor rendimiento con esta opción única.',
      },
    ];
    return { inversiones, clientes };
  }
}