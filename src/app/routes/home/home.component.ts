import { Component, OnInit } from '@angular/core';
import { ObtenerClienteAutenticado } from '../../core/utils/obtener_cliente_autenticado';
import { SeleccionCuentaComponent } from '../../components/seleccion-cuenta/seleccion-cuenta.component';
import { SidenavAutosizeExample } from '../../components/menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-home',
  imports: [SidenavAutosizeExample],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent extends ObtenerClienteAutenticado implements OnInit {
  ngOnInit(): void {
    this.obtenerClienteAutenticado();
  }
}
