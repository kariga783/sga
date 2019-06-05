import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesAlumnosComponent } from './files-alumnos.component';

describe('FilesAlumnosComponent', () => {
  let component: FilesAlumnosComponent;
  let fixture: ComponentFixture<FilesAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
