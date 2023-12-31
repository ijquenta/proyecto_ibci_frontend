import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaEstudianteComponent } from './matricula-estudiante.component';

describe('MatriculaEstudianteComponent', () => {
  let component: MatriculaEstudianteComponent;
  let fixture: ComponentFixture<MatriculaEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatriculaEstudianteComponent]
    });
    fixture = TestBed.createComponent(MatriculaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
