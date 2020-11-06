import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctalToDecimalComponent } from './octal-to-decimal.component';

describe('OctalToDecimalComponent', () => {
  let component: OctalToDecimalComponent;
  let fixture: ComponentFixture<OctalToDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctalToDecimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctalToDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
