import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InversionService } from '../../services/inversion.service';
import { Inversion } from '../../models/Inversión';

@Component({
  selector: 'app-lista',
  imports: [ReactiveFormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent implements OnInit {
  router = inject(Router);
  inversionServicio = inject(InversionService);
  servicioInversiones = inject(InversionService);
  inversionActual!: Inversion | null;

  formulario = new FormGroup({
    monto: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1),
    ]),
    plazo: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
  });

  enviarMontoPlazo(evento: Event) {
    evento.preventDefault();
    if (this.formulario.valid && this.inversionActual) {
      const { monto, plazo } = this.formulario.value;
      (this.inversionActual.monto = monto!),
        (this.inversionActual.plazo = plazo!);

      this.inversionActual.cuenta.monto =
        this.inversionActual.cuenta.monto - monto!;

      this.inversionActual.tasa = this.servicioInversiones.calcularTasa(monto!);

      this.inversionActual.rendimiento =
        this.servicioInversiones.calcularRendimiento(
          this.inversionActual.monto,
          this.inversionActual.tasa
        );

      this.router.navigate(['/vistaResumen']);
      console.log(
        'Datos enviados: ',
        this.formulario.value,
        'Inversión Actualizada',
        this.inversionActual
      );
    } else {
      console.log('Formulario inválido');
    }
  }

  ngOnInit(): void {
    this.servicioInversiones.inversionActual$.subscribe({
      next: (data) => {
        this.inversionActual = data;
        console.log(this.inversionActual);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
