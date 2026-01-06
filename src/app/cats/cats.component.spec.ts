import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsComponent } from './cats.component';
import { HttpClientModule } from '@angular/common/http'

describe('Cats', () => {
  let component: CatsComponent;
  let fixture: ComponentFixture<CatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatsComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
