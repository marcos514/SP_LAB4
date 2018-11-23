import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladoMostrarInputComponent } from './helado-mostrar-input.component';

describe('HeladoMostrarInputComponent', () => {
  let component: HeladoMostrarInputComponent;
  let fixture: ComponentFixture<HeladoMostrarInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladoMostrarInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladoMostrarInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
