import { Component, inject, OnInit } from '@angular/core';
import { TraerInversion } from '../../core/utils/base.component';
import { InversionService } from '../../services/inversion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncio',
  imports: [],
  templateUrl: './anuncio.component.html',
  styleUrl: './anuncio.component.css',
})
export class AnuncioComponent extends TraerInversion implements OnInit {
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
