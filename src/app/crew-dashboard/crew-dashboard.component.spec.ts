import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDashboardComponent } from './crew-dashboard.component';

describe('CrewDashboardComponent', () => {
  let component: CrewDashboardComponent;
  let fixture: ComponentFixture<CrewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
