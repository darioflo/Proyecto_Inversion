import { Component, inject, OnInit } from '@angular/core';
import { ObtenerClienteAutenticado } from '../../core/utils/obtener_cliente_autenticado';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seleccion-cuenta',
  imports: [NgFor, RouterLink],
  templateUrl: './seleccion-cuenta.component.html',
  styleUrl: './seleccion-cuenta.component.css',
})
export class SeleccionCuentaComponent
  extends ObtenerClienteAutenticado
  implements OnInit
{
  ngOnInit(): void {
    console.log(this.clienteServicio.clienteSeleccionado);
  }
}
