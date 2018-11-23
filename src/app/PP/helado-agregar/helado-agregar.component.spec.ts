import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladoAgregarComponent } from './helado-agregar.component';

describe('HeladoAgregarComponent', () => {
  let component: HeladoAgregarComponent;
  let fixture: ComponentFixture<HeladoAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladoAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
