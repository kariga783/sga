import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonesMaestrosComponent } from './salones-maestros.component';

describe('SalonesMaestrosComponent', () => {
  let component: SalonesMaestrosComponent;
  let fixture: ComponentFixture<SalonesMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonesMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonesMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
