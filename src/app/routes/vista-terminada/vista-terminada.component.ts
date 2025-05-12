import { Component, OnInit } from '@angular/core';
import { ParametrosDeVista } from '../../core/utils/base.vistas';
import { ComprarInversionComponent } from '../../components/comprar-inversion/comprar-inversion.component';

@Component({
  selector: 'app-vista-terminada',
  imports: [ComprarInversionComponent],
  templateUrl: './vista-terminada.component.html',
  styleUrl: './vista-terminada.component.css',
})
export class VistaTerminadaComponent
  extends ParametrosDeVista
  implements OnInit
{
  ngOnInit(): void {
    this.obtenerIDPagina();
  }
}
