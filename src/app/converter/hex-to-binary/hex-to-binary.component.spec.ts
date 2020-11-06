import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexToBinaryComponent } from './hex-to-binary.component';

describe('HexToBinaryComponent', () => {
  let component: HexToBinaryComponent;
  let fixture: ComponentFixture<HexToBinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexToBinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexToBinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
