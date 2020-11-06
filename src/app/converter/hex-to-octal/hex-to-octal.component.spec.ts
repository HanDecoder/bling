import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexToOctalComponent } from './hex-to-octal.component';

describe('HexToOctalComponent', () => {
  let component: HexToOctalComponent;
  let fixture: ComponentFixture<HexToOctalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexToOctalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexToOctalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
