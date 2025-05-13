import { inject } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { Inversion } from '../../models/Inversión';
import { InversionService } from '../../services/inversion.service';
import { ClienteService } from '../../services/cliente.service';

export class ObtenerClienteAutenticado {
  inversionesDeCliente: Inversion[] | null = null;
  servicioInversiones = inject(InversionService);
  clienteServicio = inject(ClienteService);

  obtenerClienteAutenticado() {
    this.clienteServicio.obtenerClientes().subscribe({
      next: (cliente) => {
        this.clienteServicio.clienteSeleccionado = cliente[0];
        console.log(
          'Cliente en sesion: ',
          this.clienteServicio.clienteSeleccionado
        );
      },
      error: (error) => {
        console.log(error);
        alert(`Error: ${error}`);
      },
    });
  }

  obtenerCuentaActual(idCuenta: string) {
    this.clienteServicio.cuentaSeleccionada =
      this.clienteServicio.clienteSeleccionado?.cuenta.find(
        (cuenta) => cuenta.idCuenta === idCuenta
      ) || null;
    console.log('Cuenta actual:', this.clienteServicio.cuentaSeleccionada);
  }

  mostrarInversiones() {
    this.servicioInversiones.obtenerInversiones().subscribe({
      next: (inversiones) => {
        this.servicioInversiones.inversionesDisponibles = inversiones;
        const inversionesPosibles = localStorage.getItem('inversionesDelCliente');
        if (inversionesPosibles) {
          const inversionesGuardadas: Inversion[] = JSON.parse(inversionesPosibles);
      
          console.log('Inversiones guardadas:', inversionesGuardadas);
      
          this.servicioInversiones.inversionesDisponibles = this.servicioInversiones.inversionesDisponibles.filter(
            (inversionDisponible) =>
              !inversionesGuardadas.some(
                (inversionGuardada) =>
                  inversionGuardada.idInversion === inversionDisponible.idInversion
              )
          );
        }
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
          inversion.cliente = this.clienteServicio.clienteSeleccionado;
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


}
