import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEmpresaComponent } from './ver-empresa.component';

describe('VerEmpresaComponent', () => {
  let component: VerEmpresaComponent;
  let fixture: ComponentFixture<VerEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerEmpresaComponent]
    });
    fixture = TestBed.createComponent(VerEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
