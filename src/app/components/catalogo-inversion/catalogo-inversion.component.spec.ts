import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoInversionComponent } from './catalogo-inversion.component';

describe('CatalogoInversionComponent', () => {
  let component: CatalogoInversionComponent;
  let fixture: ComponentFixture<CatalogoInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoInversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
