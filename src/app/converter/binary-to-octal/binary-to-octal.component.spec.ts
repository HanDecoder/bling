import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryToOctalComponent } from './binary-to-octal.component';

describe('BinaryToOctalComponent', () => {
  let component: BinaryToOctalComponent;
  let fixture: ComponentFixture<BinaryToOctalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryToOctalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryToOctalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
