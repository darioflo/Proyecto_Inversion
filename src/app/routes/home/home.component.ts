import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { InversionService } from '../../services/inversion.service';
import { Inversion } from '../../models/Inversión';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  clienteServicio = inject(ClienteService);
  servicioInversiones = inject(InversionService);
  clienteAutenticado: Cliente | null = null;
  inversionesDeCliente: Inversion[] | null = null;

  ngOnInit(): void {
    this.obtenerClienteAutenticado();
  }

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
}
