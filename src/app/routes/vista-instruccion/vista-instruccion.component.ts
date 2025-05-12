import { Component, OnInit } from '@angular/core';
import { ParametrosDeVista } from '../../core/utils/base.vistas';
import { InstruccionVencimientoComponent } from '../../components/instruccion-vencimiento/instruccion-vencimiento.component';

@Component({
  selector: 'app-vista-instruccion',
  imports: [InstruccionVencimientoComponent],
  templateUrl: './vista-instruccion.component.html',
  styleUrl: './vista-instruccion.component.css',
})
export class VistaInstruccionComponent
  extends ParametrosDeVista
  implements OnInit
{
  ngOnInit(): void {
    this.obtenerIDPagina();
  }
}
