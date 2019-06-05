import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMaestrosComponent } from './perfil-maestros.component';

describe('PerfilMaestrosComponent', () => {
  let component: PerfilMaestrosComponent;
  let fixture: ComponentFixture<PerfilMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
