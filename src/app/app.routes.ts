import { provideRouter, Routes, withRouterConfig } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { VistaSeleccionComponent } from './routes/vista-seleccion/vista-seleccion.component';
import { VistaResumenComponent } from './routes/vista-resumen/vista-resumen.component';
import { inversionGuard } from './core/guards/inversion.guard';
import { VistaInstruccionComponent } from './routes/vista-instruccion/vista-instruccion.component';
import { VistaTerminadaComponent } from './routes/vista-terminada/vista-terminada.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'vistaSeleccion/:id',
    component: VistaSeleccionComponent,
    canActivate: [inversionGuard],
  },
  {
    path: 'vistaResumen/:id',
    component: VistaResumenComponent,
    canActivate: [inversionGuard],
  },
  {
    path: 'vistaInstruccion/:id',
    component: VistaInstruccionComponent,
    canActivate: [inversionGuard],
  },
  {
    path: 'vistaTerminada/:id',
    component: VistaTerminadaComponent,
    canActivate: [inversionGuard],
  },
];
