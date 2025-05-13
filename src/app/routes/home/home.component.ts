import { Component, OnInit } from '@angular/core';
import { ObtenerClienteAutenticado } from '../../core/utils/obtener_cliente_autenticado';
import { SeleccionCuentaComponent } from '../../components/seleccion-cuenta/seleccion-cuenta.component';

@Component({
  selector: 'app-home',
  imports: [SeleccionCuentaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent extends ObtenerClienteAutenticado implements OnInit {
  ngOnInit(): void {
    this.obtenerClienteAutenticado();
  }
}
