import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonesAlumnosComponent } from './salones-alumnos.component';

describe('SalonesAlumnosComponent', () => {
  let component: SalonesAlumnosComponent;
  let fixture: ComponentFixture<SalonesAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonesAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonesAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
