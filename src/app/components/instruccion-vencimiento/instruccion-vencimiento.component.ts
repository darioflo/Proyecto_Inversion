import { Component, inject, OnInit } from '@angular/core';
import { InversionService } from '../../services/inversion.service';
import { Location } from '@angular/common';
import { TraerInversion } from '../../core/utils/obtener_inversion_actual';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-instruccion-vencimiento',
  imports: [ReactiveFormsModule],
  templateUrl: './instruccion-vencimiento.component.html',
  styleUrl: './instruccion-vencimiento.component.css',
})
export class InstruccionVencimientoComponent
  extends TraerInversion
  implements OnInit
{
  instruccionSeleccionada: string;
  ubicacion = inject(Location);
  servicioInversion = inject(InversionService);
  clienteActual = inject(ClienteService)
  router = inject(Router);
  formulario = new FormGroup({
    instruccion: new FormControl<string>('', Validators.required),
  });

  constructor(){
    super()
    this.instruccionSeleccionada =''
  }

  ngOnInit(): void {
    this.suscribirseAInversion(this.servicioInversion);
  }

  reinvertirInversionGanancia(saldoInvertido: number, rendimiento: number) {
    if (this.inversionActual && this.clienteActual.cuentaSeleccionada) {
      this.inversionActual.saldo_al_termino = saldoInvertido + rendimiento;
      this.clienteActual.cuentaSeleccionada.saldo -= saldoInvertido
    }
    return 0;
  }

  reinvertirInversion(saldoInvertido: number, rendimiento: number) {
    if (this.inversionActual && this.clienteActual.cuentaSeleccionada) {
      this.inversionActual.saldo_al_termino += saldoInvertido + rendimiento;
      this.clienteActual.cuentaSeleccionada.saldo -= saldoInvertido

    }
    return 0;
  }

  reembolsarTodo(saldoInvertido: number, rendimiento: number) {
    if (this.inversionActual && this.clienteActual.cuentaSeleccionada) {
      this.inversionActual.saldo_al_termino += saldoInvertido + rendimiento;
      this.clienteActual.cuentaSeleccionada.saldo -= saldoInvertido
      
    }
    return 0;
  }
  cambiodeSeleccion(evento: Event) {
    if (this.inversionActual) {
      let opcionSeleccionada = evento.target as HTMLSelectElement;
      this.instruccionSeleccionada = opcionSeleccionada.value;
      
    }
  }

  guardarInversion(){
    if (this.inversionActual?.cuenta ) {
      
      this.inversionActual.cuenta.idInversion?.push(this.inversionActual.idInversion);
      const inversionesGuardadas = localStorage.getItem('inversionesDelCliente')
      const arregloInversiones = inversionesGuardadas ? JSON.parse(inversionesGuardadas) : []

      arregloInversiones.push(this.inversionActual)
      localStorage.setItem('inversionesDelCliente',JSON.stringify(arregloInversiones))
    this.servicioInversion.inversionesDelCliente = arregloInversiones
    }
  }


  finalizarCompra(evento: Event) {
    evento.preventDefault();
    if (this.formulario.valid && this.inversionActual) {
      console.log(this.formulario.valid, this.formulario.value);
      switch (this.instruccionSeleccionada) {
        case 'Reinvertir ganancia':
          this.reinvertirInversionGanancia(
            this.inversionActual?.saldo_inicial,
            this.inversionActual?.rendimiento
          );
          this.inversionActual.instruccionVencimiento = 'Reinvertir ganancia';
          this.guardarInversion()
          break;
        case 'Reinvertir inversion':
          this.reinvertirInversion(
            this.inversionActual.saldo_inicial,
            this.inversionActual.rendimiento
          );
          this.inversionActual.instruccionVencimiento = 'Reinvertir inversion';
          this.guardarInversion()
          break;
        case 'Reembolso total':
          this.reembolsarTodo(
            this.inversionActual.saldo_inicial,
            this.inversionActual.rendimiento
          );
          this.inversionActual.instruccionVencimiento = 'Reembolso total';          
          this.guardarInversion()
          break;
        default:
          break;
      }
      this.router.navigate([
        `vistaTerminada/${this.inversionActual?.cuenta?.idCuenta}/${this.inversionActual?.idInversion}`,
      ]);
    } else {
      alert(
        'Formulario inválido: Debe seleccionar una opción antes de invertir'
      );
    }
  }
  regresar() {
    this.ubicacion.back();
  }
}
