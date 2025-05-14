import { Component, inject, OnInit } from '@angular/core';
import { ObtenerClienteAutenticado } from '../../core/utils/obtener_cliente_autenticado';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { InversionService } from '../../services/inversion.service';


@Component({
  selector: 'app-seleccion-inversion',
  imports: [RouterLink, NgFor],
  templateUrl: './seleccion-inversion.component.html',
  styleUrl: './seleccion-inversion.component.css',
})
export class SeleccionInversionComponent
  extends ObtenerClienteAutenticado
  implements OnInit
{
inversionServicio = inject(InversionService)

ngOnInit(): void {
  this.mostrarInversiones();
  this.obtenerClienteAutenticado();
}
}