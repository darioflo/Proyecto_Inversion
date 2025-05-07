import { provideRouter, Routes, withRouterConfig } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { VistaSeleccionComponent } from './routes/vista-seleccion/vista-seleccion.component';
import { VistaResumenComponent } from './routes/vista-resumen/vista-resumen.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vistaSeleccion', component: VistaSeleccionComponent },
  { path: 'vistaResumen', component: VistaResumenComponent },
];

/*
export const appRouterProviders = [
  provideRouter(routes, withRouterConfig({ onSameUrlNavigation: 'reload' })),
];
*/
