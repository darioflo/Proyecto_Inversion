import { Component, inject, OnInit } from '@angular/core';
import { InversionService } from '../../services/inversion.service';
import { Location, NgIf } from '@angular/common';
import { TraerInversion } from '../../core/utils/base.component';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-instruccion-vencimiento',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './instruccion-vencimiento.component.html',
  styleUrl: './instruccion-vencimiento.component.css',
})
export class InstruccionVencimientoComponent
  extends TraerInversion
  implements OnInit
{
  instruccionSeleccionada: string = '';
  mostrarResultados: boolean = false;
  ubicacion = inject(Location);
  servicioInversion = inject(InversionService);
  router = inject(Router);
  formulario = new FormGroup({
    instruccion: new FormControl<string>('', Validators.required),
  });

  ngOnInit(): void {
    this.suscribirseAInversion(this.servicioInversion);
  }

  reinvertirInversionGanancia(monto: number, rendimiento: number) {
    if (this.inversionActual) {
      this.inversionActual.monto = monto + rendimiento;
      console.log('Saldo inversion', this.inversionActual.monto);
    }
    return 0;
  }

  reinvertirInversion(monto: number, rendimiento: number) {
    if (this.inversionActual) {
      this.inversionActual.monto += monto;
      this.inversionActual.cuenta.monto += rendimiento;
      console.log(
        'Saldo inversion',
        this.inversionActual.monto,
        'Saldo cuenta:',
        this.inversionActual.cuenta.monto
      );
    }
  }

  reembolsarTodo(monto: number, rendimiento: number) {
    if (this.inversionActual) {
      this.inversionActual.cuenta.monto += monto + rendimiento;
      console.log('Saldo cuenta', this.inversionActual.monto);
    }
  }

  cambiodeSeleccion(evento: Event) {
    if (this.inversionActual) {
      let opcionSeleccionada = evento.target as HTMLSelectElement;
      this.instruccionSeleccionada = opcionSeleccionada.value;

      switch (this.instruccionSeleccionada) {
        case 'Reinvertir ganancia':
          this.mostrarResultados = true;
          this.reinvertirInversionGanancia(
            this.inversionActual?.monto,
            this.inversionActual?.rendimiento
          );
          this.inversionActual.instruccionVencimiento = 'Reinvertir ganancia';
          break;
        case 'Reinvertir inversion':
          this.mostrarResultados = true;
          this.reinvertirInversion(
            this.inversionActual.monto,
            this.inversionActual.rendimiento
          );
          this.inversionActual.instruccionVencimiento = 'Reinvertir inversion';
          break;
        case 'Reembolso total':
          (this.mostrarResultados = true),
            this.reembolsarTodo(
              this.inversionActual.monto,
              this.inversionActual.rendimiento
            );
          this.inversionActual.instruccionVencimiento = 'Reembolso total';
          break;
        default:
          this.mostrarResultados = false;
          break;
      }
    }
  }

  finalizarCompra(evento: Event) {
    evento.preventDefault();
    if (this.formulario.valid) {
      this.router.navigate([
        `vistaTerminada/${this.inversionActual?.idInversion}`,
      ]);
      console.log(this.formulario.value);
    } else {
      window.alert('Formulario inválido');
    }
  }
  regresar() {
    this.ubicacion.back();
  }
}
