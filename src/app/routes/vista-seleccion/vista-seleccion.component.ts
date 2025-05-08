import { Component, inject, OnInit } from '@angular/core';
import { ListaComponent } from '../../components/lista/lista.component';
import { ActivatedRoute } from '@angular/router';
import { InversionService } from '../../services/inversion.service';
import { BotonRegresarComponent } from '../../components/boton-regresar/boton-regresar.component';

@Component({
  selector: 'app-vista-seleccion',
  imports: [ListaComponent, BotonRegresarComponent],
  templateUrl: './vista-seleccion.component.html',
  styleUrl: './vista-seleccion.component.css',
})
export class VistaSeleccionComponent implements OnInit {
  private route = inject(ActivatedRoute);
  idPage: string | null = '';

  ngOnInit(): void {
    this.idPage = this.route.snapshot.paramMap.get('id');
    console.log('ID de la página:', this.idPage);
  }
}
