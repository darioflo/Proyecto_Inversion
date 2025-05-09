import { Component, OnInit } from '@angular/core';
import { SelectorComponent } from '../../components/selector/selector.component';
import { ParametrosDeVista } from '../../core/utils/base.vistas';

@Component({
  selector: 'app-vista-instruccion',
  imports: [SelectorComponent],
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
