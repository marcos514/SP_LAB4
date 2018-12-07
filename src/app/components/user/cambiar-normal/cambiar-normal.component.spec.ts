import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarNormalComponent } from './cambiar-normal.component';

describe('CambiarNormalComponent', () => {
  let component: CambiarNormalComponent;
  let fixture: ComponentFixture<CambiarNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
