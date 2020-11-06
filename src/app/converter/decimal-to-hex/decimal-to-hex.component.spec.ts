import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalToHexComponent } from './decimal-to-hex.component';

describe('DecimalToHexComponent', () => {
  let component: DecimalToHexComponent;
  let fixture: ComponentFixture<DecimalToHexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimalToHexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalToHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
