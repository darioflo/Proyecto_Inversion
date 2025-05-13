import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionCuentaComponent } from './seleccion-cuenta.component';

describe('SeleccionCuentaComponent', () => {
  let component: SeleccionCuentaComponent;
  let fixture: ComponentFixture<SeleccionCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionCuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
