import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosAlumnosComponent } from './documentos-alumnos.component';

describe('DocumentosAlumnosComponent', () => {
  let component: DocumentosAlumnosComponent;
  let fixture: ComponentFixture<DocumentosAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
