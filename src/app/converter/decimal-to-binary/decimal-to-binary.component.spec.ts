import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalToBinaryComponent } from './decimal-to-binary.component';

describe('DecimalToBinaryComponent', () => {
  let component: DecimalToBinaryComponent;
  let fixture: ComponentFixture<DecimalToBinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimalToBinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalToBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
