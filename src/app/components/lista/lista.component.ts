import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InversionService } from '../../services/inversion.service';

@Component({
  selector: 'app-lista',
  imports: [ReactiveFormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  router = inject(Router);
  inversionServicio = inject(InversionService);

  formulario = new FormGroup({
    monto: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1),
    ]),
    plazo: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
  });

  enviarMontoPlazo(evento: Event) {
    evento.preventDefault();
    if (this.formulario.valid) {
      this.router.navigate(['/vistaResumen']);
      console.log('Datos enviados: ', this.formulario.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
