import { Component, OnInit } from '@angular/core';
import { ResumenComponent } from '../../components/resumen/resumen.component';
import { ParametrosDeVista } from '../../core/utils/base.vistas';

@Component({
  selector: 'app-vista-resumen',
  imports: [ResumenComponent],
  templateUrl: './vista-resumen.component.html',
  styleUrl: './vista-resumen.component.css',
})
export class VistaResumenComponent extends ParametrosDeVista implements OnInit {
  ngOnInit(): void {
    this.obtenerIDPagina();
  }
}
