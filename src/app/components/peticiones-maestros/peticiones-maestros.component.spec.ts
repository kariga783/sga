import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesMaestrosComponent } from './peticiones-maestros.component';

describe('PeticionesMaestrosComponent', () => {
  let component: PeticionesMaestrosComponent;
  let fixture: ComponentFixture<PeticionesMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionesMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionesMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
