import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarEmpresaComponent } from './alterar-empresa.component';

describe('AlterarEmpresaComponent', () => {
  let component: AlterarEmpresaComponent;
  let fixture: ComponentFixture<AlterarEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarEmpresaComponent]
    });
    fixture = TestBed.createComponent(AlterarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
