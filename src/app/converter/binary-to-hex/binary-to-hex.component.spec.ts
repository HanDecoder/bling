import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryToHexComponent } from './binary-to-hex.component';

describe('BinaryToHexComponent', () => {
  let component: BinaryToHexComponent;
  let fixture: ComponentFixture<BinaryToHexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryToHexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryToHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
