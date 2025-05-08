import { provideRouter, Routes, withRouterConfig } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { VistaSeleccionComponent } from './routes/vista-seleccion/vista-seleccion.component';
import { VistaResumenComponent } from './routes/vista-resumen/vista-resumen.component';
import { inversionGuard } from './core/guards/inversion.guard';
import { SelectorComponent } from './components/selector/selector.component';
import { VistaInstruccionComponent } from './routes/vista-instruccion/vista-instruccion.component';

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
];
