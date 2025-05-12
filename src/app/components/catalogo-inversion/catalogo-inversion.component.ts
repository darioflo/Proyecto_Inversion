import { Component, inject, OnInit } from '@angular/core';
import { InversionService } from '../../services/inversion.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TraerInversion } from '../../core/utils/base.component';

@Component({
  selector: 'app-catalogo-inversion',
  imports: [],
  templateUrl: './catalogo-inversion.component.html',
  styleUrl: './catalogo-inversion.component.css',
})
export class CatalogoInversionComponent
  extends TraerInversion
  implements OnInit
{
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
