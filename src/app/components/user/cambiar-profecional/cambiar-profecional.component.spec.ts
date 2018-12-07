import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarProfecionalComponent } from './cambiar-profecional.component';

describe('CambiarProfecionalComponent', () => {
  let component: CambiarProfecionalComponent;
  let fixture: ComponentFixture<CambiarProfecionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarProfecionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarProfecionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
