import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadServidoresComponent } from './cantidad-servidores.component';

describe('CantidadServidoresComponent', () => {
  let component: CantidadServidoresComponent;
  let fixture: ComponentFixture<CantidadServidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadServidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadServidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
