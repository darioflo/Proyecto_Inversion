import { Component, OnInit } from '@angular/core';
import { SeleccionInversionComponent } from '../../components/seleccion-inversion/seleccion-inversion.component';
import { ParametrosDeVista } from '../../core/utils/obtener_parametro_ruta';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vista-inversion',
  imports: [SeleccionInversionComponent],
  templateUrl: './vista-inversion.component.html',
  styleUrl: './vista-inversion.component.css',
})
export class VistaInversionComponent
  extends ParametrosDeVista
  implements OnInit
{
  ngOnInit(): void {
    this.obtenerIDPagina();
  }
}
