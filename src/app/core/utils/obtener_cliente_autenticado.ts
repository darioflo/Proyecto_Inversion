import { inject } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { Inversion } from '../../models/Inversión';
import { InversionService } from '../../services/inversion.service';
import { ClienteService } from '../../services/cliente.service';

export class ObtenerClienteAutenticado {
  clienteAutenticado: Cliente | null = null;
  inversionesDeCliente: Inversion[] | null = null;
  servicioInversiones = inject(InversionService);
  clienteServicio = inject(ClienteService);
  inversionesDisponibles: Inversion[] = [];

  obtenerClienteAutenticado() {
    this.clienteServicio.obtenerClientes().subscribe({
      next: (cliente) => {
        this.clienteAutenticado = cliente[0];
        this.clienteServicio.clienteSeleccionado = cliente[0];
        console.log(
          'Cliente en sesion: ',
          this.clienteAutenticado,
          this.clienteServicio.clienteSeleccionado
        );
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  obtenerCuentaActual(idCuenta: string) {
    this.clienteServicio.cuentaSeleccionada =
      this.clienteAutenticado?.cuenta.find(
        (cuenta) => cuenta.idCuenta === idCuenta
      ) || null;
    console.log('Cuenta actual:', this.clienteServicio.cuentaSeleccionada);
  }

  mostrarInversiones() {
    this.servicioInversiones.obtenerInversiones().subscribe({
      next: (inversiones) => {
        this.inversionesDisponibles = inversiones;
        console.log('Inversiones: ', this.inversionesDisponibles);
      },
      error: (error) => {
        console.log('Error', error);
        alert(`Error: ${error}`);
      },
    });
  }

  obtenerInversionActual(idInversion: string) {
    this.servicioInversiones.obtenerInversiones().subscribe({
      next: (inversiones) => {
        const inversion = inversiones.find(
          (inversion) => inversion.idInversion === idInversion
        );
        if (inversion) {
          inversion.cliente = this.clienteAutenticado;
          inversion.cuenta = this.clienteServicio.cuentaSeleccionada;
          this.servicioInversiones.actualizarInversionActual(inversion);
          console.log('Inversión Actual:', inversion);
        } else {
          console.log('No se encontró la inversión con el ID:', idInversion);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  /*obtenerInversionesDeCliente(idCliente: string) {
    this.servicioInversiones.obtenerInversiones().subscribe({
      next: (inversiones) => {
        this.inversionesDeCliente = inversiones.filter(
          (inversion) => inversion.cliente.idCliente === idCliente
        );
        console.log('Inversiones: ', this.inversionesDeCliente);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  */
}
