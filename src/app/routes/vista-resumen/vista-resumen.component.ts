import { Component, inject, OnInit } from '@angular/core';
import { InversionService } from '../../services/inversion.service';
import { Inversion } from '../../models/Inversión';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ResumenComponent } from '../../components/resumen/resumen.component';

@Component({
  selector: 'app-vista-resumen',
  imports: [ResumenComponent],
  templateUrl: './vista-resumen.component.html',
  styleUrl: './vista-resumen.component.css',
})
export class VistaResumenComponent implements OnInit {
  private route = inject(ActivatedRoute);
  idPage: string | null = '';

  ngOnInit(): void {
    this.idPage = this.route.snapshot.paramMap.get('id');
    console.log('ID de la página:', this.idPage);
  }
}
