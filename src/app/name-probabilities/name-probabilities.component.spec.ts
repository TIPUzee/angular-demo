import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameProbabilitiesComponent } from './name-probabilities.component';
import { HttpClientModule } from '@angular/common/http'

describe('NameProbabilities', () => {
  let component: NameProbabilitiesComponent;
  let fixture: ComponentFixture<NameProbabilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameProbabilitiesComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(NameProbabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
