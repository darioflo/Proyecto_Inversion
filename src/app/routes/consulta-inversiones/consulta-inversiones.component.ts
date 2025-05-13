import { Component, inject, OnInit } from '@angular/core';
import { InversionService } from '../../services/inversion.service';
import { NgFor, NgIf } from '@angular/common';
import { Inversion } from '../../models/Inversión';

@Component({
  selector: 'app-consulta-inversiones',
  imports: [NgIf, NgFor],
  templateUrl: './consulta-inversiones.component.html',
  styleUrl: './consulta-inversiones.component.css',
})
export class ConsultaInversionesComponent implements OnInit {
  inversiones: Inversion[] = [];

  ngOnInit(): void {
    const inversionesCliente = localStorage.getItem('inversionesDelCliente');
    if (inversionesCliente) {
      this.inversiones = JSON.parse(inversionesCliente);
    }
    console.log(this.inversiones);
  }
}
