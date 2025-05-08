import { Component, inject, OnInit } from '@angular/core';
import { ListaComponent } from '../../components/lista/lista.component';
import { InversionService } from '../../services/inversion.service';
import { Inversion } from '../../models/Inversión';
import { BotonRegresarComponent } from '../../components/boton-regresar/boton-regresar.component';

@Component({
  selector: 'app-vista-resumen',
  imports: [BotonRegresarComponent],
  templateUrl: './vista-resumen.component.html',
  styleUrl: './vista-resumen.component.css',
})
export class VistaResumenComponent implements OnInit {
  servicioInversiones = inject(InversionService);
  datosDeInversion!: Inversion | null;

  ngOnInit(): void {
    this.servicioInversiones.inversionActual$.subscribe({
      next: (inversion) => {
        this.datosDeInversion = inversion;
      },
      error: (error) => {
        console.log(error);
      },
    });

    console.log('Inversion desde vista Resumen', this.datosDeInversion);
  }
}
