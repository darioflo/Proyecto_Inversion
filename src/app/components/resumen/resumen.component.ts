import { Component, inject, OnInit } from '@angular/core';
import { InversionService } from '../../services/inversion.service';
import { Inversion } from '../../models/Inversión';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TraerInversion } from '../../core/utils/base.component';

@Component({
  selector: 'app-resumen',
  imports: [],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent extends TraerInversion implements OnInit {
  servicioInversion = inject(InversionService);
  ubicacion = inject(Location);
  router = inject(Router);

  ngOnInit(): void {
    this.suscribirseAInversion(this.servicioInversion);
  }

  regresar() {
    this.servicioInversion.inversionActual$.subscribe({
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
      `/vistaInstruccion/${this.inversionActual?.idInversion}`,
    ]);
  }
}
