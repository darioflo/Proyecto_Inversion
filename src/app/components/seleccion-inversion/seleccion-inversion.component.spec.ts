import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionInversionComponent } from './seleccion-inversion.component';

describe('SeleccionInversionComponent', () => {
  let component: SeleccionInversionComponent;
  let fixture: ComponentFixture<SeleccionInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionInversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
