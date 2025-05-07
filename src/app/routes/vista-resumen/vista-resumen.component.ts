import { Component } from '@angular/core';
import { ListaComponent } from '../../components/lista/lista.component';

@Component({
  selector: 'app-vista-resumen',
  imports: [ListaComponent],
  templateUrl: './vista-resumen.component.html',
  styleUrl: './vista-resumen.component.css',
})
export class VistaResumenComponent {}
