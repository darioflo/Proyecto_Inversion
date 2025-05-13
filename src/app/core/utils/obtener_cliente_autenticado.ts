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

  obtenerClienteAutenticado() {
    this.clienteServicio.obtenerClientes().subscribe({
      next: (clientes) => {
        this.clienteServicio.clienteSeleccionado =
          clientes[Math.floor(Math.random() * clientes.length)];
        this.clienteAutenticado = this.clienteServicio.clienteSeleccionado;
        console.log('Cliente en sesion: ', this.clienteAutenticado);

        if (this.clienteAutenticado?.idCliente) {
          this.obtenerInversionesDeCliente(this.clienteAutenticado.idCliente);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  obtenerInversionesDeCliente(idCliente: string) {
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

  obtenerInversionActual(idInversion: string) {
    this.servicioInversiones.obtenerInversiones().subscribe({
      next: (inversiones) => {
        const inversion = inversiones.find(
          (inversion) => inversion.idInversion === idInversion
        );
        if (inversion) {
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
}
