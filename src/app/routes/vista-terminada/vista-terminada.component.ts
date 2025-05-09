import { Component, OnInit } from '@angular/core';
import { ParametrosDeVista } from '../../core/utils/base.vistas';
import { AnuncioComponent } from '../../components/anuncio/anuncio.component';

@Component({
  selector: 'app-vista-terminada',
  imports: [AnuncioComponent],
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
