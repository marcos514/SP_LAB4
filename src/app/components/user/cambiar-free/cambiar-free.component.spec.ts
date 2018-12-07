import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarFreeComponent } from './cambiar-free.component';

describe('CambiarFreeComponent', () => {
  let component: CambiarFreeComponent;
  let fixture: ComponentFixture<CambiarFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
