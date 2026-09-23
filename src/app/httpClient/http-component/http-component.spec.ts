import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpComponent } from './http-component';

describe('HttpComponent', () => {
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
