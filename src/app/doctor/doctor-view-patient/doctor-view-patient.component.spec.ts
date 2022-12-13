import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewPatientComponent } from './doctor-view-patient.component';

describe('DoctorViewPatientComponent', () => {
  let component: DoctorViewPatientComponent;
  let fixture: ComponentFixture<DoctorViewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorViewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: any) {
  throw new Error('Function not implemented.');
}

function expect(component: DoctorViewPatientComponent) {
  throw new Error('Function not implemented.');
}

