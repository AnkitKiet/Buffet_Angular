import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityTestComponent } from './facility-test.component';

describe('FacilityTestComponent', () => {
  let component: FacilityTestComponent;
  let fixture: ComponentFixture<FacilityTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
