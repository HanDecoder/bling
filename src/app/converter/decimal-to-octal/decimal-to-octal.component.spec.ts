import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalToOctalComponent } from './decimal-to-octal.component';

describe('DecimalToOctalComponent', () => {
  let component: DecimalToOctalComponent;
  let fixture: ComponentFixture<DecimalToOctalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimalToOctalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalToOctalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
