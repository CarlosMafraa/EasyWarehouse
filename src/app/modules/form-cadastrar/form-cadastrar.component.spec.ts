import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastrarComponent } from './form-cadastrar.component';

describe('FormCadastrarComponent', () => {
  let component: FormCadastrarComponent;
  let fixture: ComponentFixture<FormCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
