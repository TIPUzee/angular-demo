import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameProbabilitiesComponent } from './name-probabilities.component';

describe('LoginComponent', () => {
  let component: NameProbabilitiesComponent;
  let fixture: ComponentFixture<NameProbabilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameProbabilitiesComponent]
    });
    fixture = TestBed.createComponent(NameProbabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
