import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladoFiltrarComponent } from './helado-filtrar.component';

describe('HeladoFiltrarComponent', () => {
  let component: HeladoFiltrarComponent;
  let fixture: ComponentFixture<HeladoFiltrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladoFiltrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladoFiltrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
