import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesMaestrosComponent } from './files-maestros.component';

describe('FilesMaestrosComponent', () => {
  let component: FilesMaestrosComponent;
  let fixture: ComponentFixture<FilesMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
