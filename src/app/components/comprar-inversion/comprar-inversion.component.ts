import { Component, inject, OnInit } from '@angular/core';
import { TraerInversion } from '../../core/utils/base.component';
import { InversionService } from '../../services/inversion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar-inversion',
  imports: [],
  templateUrl: './comprar-inversion.component.html',
  styleUrl: './comprar-inversion.component.css',
})
export class ComprarInversionComponent
  extends TraerInversion
  implements OnInit
{
  servicioInversion = inject(InversionService);
  router = inject(Router);
  ngOnInit(): void {
    this.suscribirseAInversion(this.servicioInversion);
    console.log(this.inversionActual);
  }

  irAlHome() {
    this.router.navigate(['']);
  }
}
