import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontoPlazoComponent } from './saldo-plazo.component';

describe('MontoPlazoComponent', () => {
  let component: MontoPlazoComponent;
  let fixture: ComponentFixture<MontoPlazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontoPlazoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MontoPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
