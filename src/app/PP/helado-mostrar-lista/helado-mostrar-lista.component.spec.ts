import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladoMostrarListaComponent } from './helado-mostrar-lista.component';

describe('HeladoMostrarListaComponent', () => {
  let component: HeladoMostrarListaComponent;
  let fixture: ComponentFixture<HeladoMostrarListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladoMostrarListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladoMostrarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
