import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteObserverComponent } from './componente-observer.component';

describe('ComponenteObserverComponent', () => {
  let component: ComponenteObserverComponent;
  let fixture: ComponentFixture<ComponenteObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteObserverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
