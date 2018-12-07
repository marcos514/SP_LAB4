import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadMBComponent } from './cantidad-mb.component';

describe('CantidadMBComponent', () => {
  let component: CantidadMBComponent;
  let fixture: ComponentFixture<CantidadMBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadMBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
