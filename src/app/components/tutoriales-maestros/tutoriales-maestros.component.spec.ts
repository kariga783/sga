import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialesMaestrosComponent } from './tutoriales-maestros.component';

describe('TutorialesMaestrosComponent', () => {
  let component: TutorialesMaestrosComponent;
  let fixture: ComponentFixture<TutorialesMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialesMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialesMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
