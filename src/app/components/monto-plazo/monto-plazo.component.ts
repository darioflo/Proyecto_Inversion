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
import { TraerInversion } from '../../core/utils/base.component';

@Component({
  selector: 'app-monto-plazo',
  imports: [ReactiveFormsModule],
  templateUrl: './monto-plazo.component.html',
  styleUrl: './monto-plazo.component.css',
})
export class MontoPlazoComponent extends TraerInversion implements OnInit {
  router = inject(Router);
  servicioInversion = inject(InversionService);
  ubicacion = inject(Location);

  formulario = new FormGroup({
    monto: new FormControl<number | null>(1000, [
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

  enviarMontoPlazo(evento: Event) {
    evento.preventDefault();
    if (this.formulario.valid && this.inversionActual) {
      const { monto, plazo } = this.formulario.value;
      (this.inversionActual.monto = monto!),
        (this.inversionActual.plazo = plazo!);

      if (this.inversionActual.monto <= this.inversionActual.cuenta.monto) {
        this.inversionActual.cuenta.monto =
          this.inversionActual.cuenta.monto - monto!;

        this.inversionActual.tasa = this.servicioInversion.calcularTasa(monto!);

        this.inversionActual.rendimiento =
          this.servicioInversion.calcularRendimiento(
            this.inversionActual.monto,
            this.inversionActual.tasa
          );

        this.router.navigate([
          `vistaResumen/${this.inversionActual.idInversion}`,
        ]);
        console.log(
          'Datos enviados: ',
          this.formulario.value,
          'Inversión Actualizada',
          this.inversionActual
        );
      } else {
        window.alert('No se puede enviar una cantidad superior al monto.');
      }
    } else {
      console.log('Formulario inválido');
      window.alert('Formulario inválido');
    }
  }

  regresar() {
    this.ubicacion.back();
  }
}
