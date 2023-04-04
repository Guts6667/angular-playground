import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningCompComponent } from './warning-comp.component';

describe('WarningCompComponent', () => {
  let component: WarningCompComponent;
  let fixture: ComponentFixture<WarningCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
