import { Component, OnInit } from '@angular/core';
import { ParametrosDeVista } from '../../core/utils/obtener_parametro_ruta';
import { CatalogoInversionComponent } from '../../components/catalogo-inversion/catalogo-inversion.component';

@Component({
  selector: 'app-vista-resumen',
  imports: [CatalogoInversionComponent],
  templateUrl: './vista-resumen.component.html',
  styleUrl: './vista-resumen.component.css',
})
export class VistaResumenComponent extends ParametrosDeVista implements OnInit {
  ngOnInit(): void {
    this.obtenerIDPagina();
  }
}
