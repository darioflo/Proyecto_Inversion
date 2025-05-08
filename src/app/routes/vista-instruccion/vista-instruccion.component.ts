import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectorComponent } from '../../components/selector/selector.component';

@Component({
  selector: 'app-vista-instruccion',
  imports: [SelectorComponent],
  templateUrl: './vista-instruccion.component.html',
  styleUrl: './vista-instruccion.component.css',
})
export class VistaInstruccionComponent implements OnInit {
  private route = inject(ActivatedRoute);
  idPage: string | null = '';

  ngOnInit(): void {
    this.idPage = this.route.snapshot.paramMap.get('id');
    console.log('ID de la página:', this.idPage);
  }
}
