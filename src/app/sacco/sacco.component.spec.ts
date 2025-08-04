import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaccoComponent } from './sacco.component';

describe('SaccoComponent', () => {
  let component: SaccoComponent;
  let fixture: ComponentFixture<SaccoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaccoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
