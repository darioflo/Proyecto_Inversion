import { Component, inject, OnInit } from '@angular/core';
import { ObtenerClienteAutenticado } from '../../core/utils/obtener_cliente_autenticado';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/Cliente';
import { InversionService } from '../../services/inversion.service';
import { Inversion } from '../../models/Inversión';

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