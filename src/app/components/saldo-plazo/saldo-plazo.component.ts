import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InversionService } from '../../services/inversion.service';
import { Location } from '@angular/common';
import { TraerInversion } from '../../core/utils/obtener_inversion_actual';

@Component({
  selector: 'app-saldo-plazo',
  imports: [ReactiveFormsModule],
  templateUrl: './saldo-plazo.component.html',
  styleUrl: './saldo-plazo.component.css',
})
export class saldoPlazoComponent extends TraerInversion implements OnInit {
  router = inject(Router);
  servicioInversion = inject(InversionService);
  ubicacion = inject(Location);

  formulario = new FormGroup({
    saldo: new FormControl<number | null>(1000, [
      Validators.required,
      Validators.min(1000),
    ]),
    plazo: new FormControl<number>(28, [
      Validators.required,
      Validators.min(1),
    ]),
  });

  ngOnInit(): void {
    this.suscribirseAInversion(this.servicioInversion);
  }

  enviarSaldoPlazo(evento: Event) {
    evento.preventDefault();
    if (this.formulario.valid && this.inversionActual) {
      const { saldo, plazo } = this.formulario.value;
      (this.inversionActual.saldo_inicial = saldo!),
        (this.inversionActual.plazo = plazo!);

      if (
        this.inversionActual?.saldo_inicial! <=
        this.inversionActual?.cuenta?.saldo!
      ) {
        if (this.inversionActual?.cuenta) {
          this.inversionActual.cuenta.saldo =
            this.inversionActual.cuenta.saldo - saldo!;
        }

        this.inversionActual.tasa = this.servicioInversion.calcularTasa(saldo!);

        this.inversionActual.rendimiento =
          this.servicioInversion.calcularRendimiento(
            this.inversionActual.saldo_inicial,
            this.inversionActual.tasa
          );

        this.router.navigate([
          `vistaResumen/${this.inversionActual?.cuenta?.idCuenta}/${this.inversionActual.idInversion}`,
        ]);
        console.log(
          'Datos enviados: ',
          this.formulario.value,
          'Inversión Actualizada',
          this.inversionActual
        );
      } else {
        window.alert(
          'Formulario inválido: No se puede enviar una cantidad superior al saldo.'
        );
      }
    } else {
      console.log('Formulario inválido');
      window.alert(
        'Formulario inválido: El monto mínimo para invertir es de 1000 mxn'
      );
    }
  }

  regresar() {
    this.ubicacion.back();
  }
}
