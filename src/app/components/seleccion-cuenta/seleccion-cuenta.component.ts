import { Component, inject, OnInit } from '@angular/core';
import { ObtenerClienteAutenticado } from '../../core/utils/obtener_cliente_autenticado';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Inversion } from '../../models/Inversión';

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
    let actualizarCuenta = localStorage.getItem('inversionesDelCliente')
    if (actualizarCuenta) {
      let inversionHecha = JSON.parse(actualizarCuenta)
      let ultimaInversion = inversionHecha[inversionHecha.length -1 ]
      const  id  = ultimaInversion.cuenta.idCuenta;
    
      if (this.clienteServicio.clienteSeleccionado?.cuenta) {
        this.clienteServicio.clienteSeleccionado.cuenta.forEach((cuenta) => {
          if (cuenta.idCuenta === id) {
            cuenta.saldo = ultimaInversion.cuenta.saldo
          }
        });
      }
      console.log(ultimaInversion.cuenta.saldo);
      
    }
    
  }
}
