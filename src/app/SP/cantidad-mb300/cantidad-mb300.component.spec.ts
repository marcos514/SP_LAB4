import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadMB300Component } from './cantidad-mb300.component';

describe('CantidadMB300Component', () => {
  let component: CantidadMB300Component;
  let fixture: ComponentFixture<CantidadMB300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadMB300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadMB300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
