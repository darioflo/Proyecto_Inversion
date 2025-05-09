import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class ParametrosDeVista {
  private router = inject(ActivatedRoute);
  idVista: string | null = null;

  obtenerIDPagina() {
    this.idVista = this.router.snapshot.paramMap.get('id');
    console.log('ID de la página:', this.idVista);
  }
}
