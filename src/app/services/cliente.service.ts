import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private http = inject(HttpClient);
  clienteSeleccionado: Cliente | null = null;

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('api/clientes');
  }

  obtenerClienteSeleccionado(): Cliente | null {
    return this.clienteSeleccionado;
  }
}
