import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  clienteServicio = inject(ClienteService);
  clienteAutenticado: Cliente | null = null;

  ngOnInit(): void {
    this.obtenerClienteAutenticado();
  }

  obtenerClienteAutenticado() {
    this.clienteServicio.obtenerClientes().subscribe({
      next: (data) => {
        this.clienteServicio.clienteSeleccionado =
          data[Math.floor(Math.random() * data.length)];
        this.clienteAutenticado = this.clienteServicio.clienteSeleccionado;
        console.log(this.clienteAutenticado);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
