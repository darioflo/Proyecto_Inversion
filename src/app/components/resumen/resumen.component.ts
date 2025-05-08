import { Component, inject, OnInit } from '@angular/core';
import { InversionService } from '../../services/inversion.service';
import { Inversion } from '../../models/Inversión';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  imports: [],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent implements OnInit {
  servicioInversiones = inject(InversionService);
  datosDeInversion!: Inversion | null;
  ubicacion = inject(Location);
  router = inject(Router);

  ngOnInit(): void {
    this.servicioInversiones.inversionActual$.subscribe({
      next: (inversion) => {
        this.datosDeInversion = inversion;
      },
      error: (error) => {
        console.log(error);
      },
    });

    console.log('Inversion desde vista Resumen', this.datosDeInversion);
  }

  regresar() {
    this.servicioInversiones.inversionActual$.subscribe({
      next: (inversion) => {
        if (inversion?.cuenta && inversion.monto) {
          inversion.cuenta.monto += inversion.monto;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.ubicacion.back();
  }
  continuar() {
    this.router.navigate([
      `/vistaInstruccion/${this.datosDeInversion?.idInversion}`,
    ]);
  }
}
