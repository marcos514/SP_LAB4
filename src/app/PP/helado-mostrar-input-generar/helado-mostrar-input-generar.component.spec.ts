import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladoMostrarInputGenerarComponent } from './helado-mostrar-input-generar.component';

describe('HeladoMostrarInputGenerarComponent', () => {
  let component: HeladoMostrarInputGenerarComponent;
  let fixture: ComponentFixture<HeladoMostrarInputGenerarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladoMostrarInputGenerarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladoMostrarInputGenerarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
