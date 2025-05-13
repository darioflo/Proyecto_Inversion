import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SeleccionCuentaComponent } from '../seleccion-cuenta/seleccion-cuenta.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-menu-lateral',
  templateUrl: 'menu-lateral.component.html',
  styleUrl: 'menu-lateral.component.css',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    SeleccionCuentaComponent,
    NgIf,
    RouterLink,
  ],
})
export class SidenavAutosizeExample {
  showFiller = false;

  limpiar(){
    localStorage.clear()
  }
}
