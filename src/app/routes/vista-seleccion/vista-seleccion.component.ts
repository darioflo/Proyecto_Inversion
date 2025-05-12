import { Component, OnInit } from '@angular/core';
import { ParametrosDeVista } from '../../core/utils/base.vistas';
import { MontoPlazoComponent } from '../../components/monto-plazo/monto-plazo.component';

@Component({
  selector: 'app-vista-seleccion',
  imports: [MontoPlazoComponent],
  templateUrl: './vista-seleccion.component.html',
  styleUrl: './vista-seleccion.component.css',
})
export class VistaSeleccionComponent
  extends ParametrosDeVista
  implements OnInit
{
  ngOnInit(): void {
    this.obtenerIDPagina();
  }
}
