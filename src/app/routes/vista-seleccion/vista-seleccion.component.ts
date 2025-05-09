import { Component, OnInit } from '@angular/core';
import { ListaComponent } from '../../components/lista/lista.component';
import { ParametrosDeVista } from '../../core/utils/base.vistas';

@Component({
  selector: 'app-vista-seleccion',
  imports: [ListaComponent],
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
