import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-boton-regresar',
  imports: [],
  templateUrl: './boton-regresar.component.html',
  styleUrl: './boton-regresar.component.css',
})
export class BotonRegresarComponent {
  ubicacion = inject(Location);

  regresar(): void {
    this.ubicacion.back();
  }
}
