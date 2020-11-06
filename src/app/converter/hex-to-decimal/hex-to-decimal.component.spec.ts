import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexToDecimalComponent } from './hex-to-decimal.component';

describe('HexToDecimalComponent', () => {
  let component: HexToDecimalComponent;
  let fixture: ComponentFixture<HexToDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexToDecimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexToDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
