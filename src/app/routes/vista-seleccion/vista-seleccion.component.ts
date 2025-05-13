import { Component, OnInit } from '@angular/core';
import { ParametrosDeVista } from '../../core/utils/obtener_parametro_ruta';
import { saldoPlazoComponent } from '../../components/saldo-plazo/saldo-plazo.component';

@Component({
  selector: 'app-vista-seleccion',
  imports: [saldoPlazoComponent, saldoPlazoComponent],
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
