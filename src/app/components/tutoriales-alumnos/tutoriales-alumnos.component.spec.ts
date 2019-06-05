import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialesAlumnosComponent } from './tutoriales-alumnos.component';

describe('TutorialesAlumnosComponent', () => {
  let component: TutorialesAlumnosComponent;
  let fixture: ComponentFixture<TutorialesAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialesAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialesAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
