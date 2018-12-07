import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarServidoresComponent } from './mostrar-servidores.component';

describe('MostrarServidoresComponent', () => {
  let component: MostrarServidoresComponent;
  let fixture: ComponentFixture<MostrarServidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarServidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarServidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
