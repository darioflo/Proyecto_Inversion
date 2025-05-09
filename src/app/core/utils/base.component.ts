import { Inversion } from '../../models/Inversión';
import { InversionService } from '../../services/inversion.service';

export class TraerInversion {
  protected inversionActual!: Inversion | null;

  protected suscribirseAInversion(servicioInversiones: InversionService) {
    servicioInversiones.inversionActual$.subscribe({
      next: (data) => (this.inversionActual = data),
      error: (error) => console.log('Error:', error),
    });
  }
}
