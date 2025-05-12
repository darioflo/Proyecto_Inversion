import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarInversionComponent } from './comprar-inversion.component';

describe('ComprarInversionComponent', () => {
  let component: ComprarInversionComponent;
  let fixture: ComponentFixture<ComprarInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprarInversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
