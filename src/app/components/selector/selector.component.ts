import { Component, inject, OnInit } from '@angular/core';
import { InversionService } from '../../services/inversion.service';
import { Inversion } from '../../models/Inversión';
import { Location, NgIf } from '@angular/common';
import { TraerInversion } from '../../core/utils/base.component';

@Component({
  selector: 'app-selector',
  imports: [NgIf],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css',
})
export class SelectorComponent extends TraerInversion implements OnInit {
  instruccionSeleccionada: string = '';
  mostrarResultados: boolean = false;
  ubicacion = inject(Location);
  servicioInversion = inject(InversionService);

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
        case 'reinvertirGanancia':
          this.mostrarResultados = true;
          this.reinvertirInversionGanancia(
            this.inversionActual?.monto,
            this.inversionActual?.rendimiento
          );
          break;
        case 'reinvertirInversion':
          this.mostrarResultados = true;
          this.reinvertirInversion(
            this.inversionActual.monto,
            this.inversionActual.rendimiento
          );
          break;
        case 'reembolsoTotal':
          (this.mostrarResultados = true),
            this.reembolsarTodo(
              this.inversionActual.monto,
              this.inversionActual.rendimiento
            );
          break;
        default:
          this.mostrarResultados = false;
          break;
      }
    }
  }

  finalizarCompra() {}
  regresar() {
    this.ubicacion.back();
  }
}
