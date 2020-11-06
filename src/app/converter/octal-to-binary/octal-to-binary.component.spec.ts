import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctalToBinaryComponent } from './octal-to-binary.component';

describe('OctalToBinaryComponent', () => {
  let component: OctalToBinaryComponent;
  let fixture: ComponentFixture<OctalToBinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctalToBinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctalToBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
