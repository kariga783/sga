import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosMaestrosComponent } from './documentos-maestros.component';

describe('DocumentosMaestrosComponent', () => {
  let component: DocumentosMaestrosComponent;
  let fixture: ComponentFixture<DocumentosMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
