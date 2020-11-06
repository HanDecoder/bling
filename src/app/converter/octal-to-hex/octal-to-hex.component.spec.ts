import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctalToHexComponent } from './octal-to-hex.component';

describe('OctalToHexComponent', () => {
  let component: OctalToHexComponent;
  let fixture: ComponentFixture<OctalToHexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctalToHexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctalToHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
