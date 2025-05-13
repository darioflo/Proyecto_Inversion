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
  instruccionSeleccionada: string = '';
  ubicacion = inject(Location);
  servicioInversion = inject(InversionService);
  router = inject(Router);
  formulario = new FormGroup({
    instruccion: new FormControl<string>('', Validators.required),
  });

  ngOnInit(): void {
    this.suscribirseAInversion(this.servicioInversion);
  }

  reinvertirInversionGanancia(saldoInvertido: number, rendimiento: number) {
    if (this.inversionActual) {
      this.inversionActual.saldo_al_termino = saldoInvertido + rendimiento;
      console.log('Saldo inicial: ', this.inversionActual.saldo_inicial);
      console.log('Saldo al termino: ', this.inversionActual.saldo_al_termino);
      console.log('Saldo cuenta: ', this.inversionActual?.cuenta?.saldo);
    }
    return 0;
  }

  reinvertirInversion(saldoInvertido: number, rendimiento: number) {
    if (this.inversionActual) {
      this.inversionActual.saldo_al_termino += saldoInvertido + rendimiento;
      console.log('Saldo inicial: ', this.inversionActual.saldo_inicial);
      console.log('Saldo al termino: ', this.inversionActual.saldo_al_termino);
      console.log('Saldo cuenta: ', this.inversionActual?.cuenta?.saldo);
    }
  }

  reembolsarTodo(saldoInvertido: number, rendimiento: number) {
    if (this.inversionActual) {
      this.inversionActual.saldo_al_termino += saldoInvertido + rendimiento;
      console.log('Saldo inicial: ', this.inversionActual.saldo_inicial);
      console.log('Saldo al termino: ', this.inversionActual.saldo_al_termino);
      console.log('Saldo cuenta: ', this.inversionActual?.cuenta?.saldo);
    }
  }
  cambiodeSeleccion(evento: Event) {
    if (this.inversionActual) {
      let opcionSeleccionada = evento.target as HTMLSelectElement;
      this.instruccionSeleccionada = opcionSeleccionada.value;
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
          this.servicioInversion.inversionesDelCliente.push(
            this.inversionActual
          );
          localStorage.setItem(
            'inversionesDelCliente',
            JSON.stringify(this.servicioInversion.inversionesDelCliente)
          );
          break;
        case 'Reinvertir inversion':
          this.reinvertirInversion(
            this.inversionActual.saldo_inicial,
            this.inversionActual.rendimiento
          );
          this.inversionActual.instruccionVencimiento = 'Reinvertir inversion';
          this.servicioInversion.inversionesDelCliente.push(
            this.inversionActual
          );
          localStorage.setItem(
            'inversionesDelCliente',
            JSON.stringify(this.servicioInversion.inversionesDelCliente)
          );
          break;
        case 'Reembolso total':
          this.reembolsarTodo(
            this.inversionActual.saldo_inicial,
            this.inversionActual.rendimiento
          );
          this.inversionActual.instruccionVencimiento = 'Reembolso total';
          this.servicioInversion.inversionesDelCliente.push(
            this.inversionActual
          );
          localStorage.setItem(
            'inversionesDelCliente',
            JSON.stringify(this.servicioInversion.inversionesDelCliente)
          );
          break;
        default:
          break;
      }
      this.router.navigate([
        `vistaTerminada/${this.inversionActual?.cuenta?.idCuenta}/${this.inversionActual?.idInversion}`,
      ]);
      console.log(
        this.formulario.value,
        this.servicioInversion.inversionesDelCliente
      );
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
