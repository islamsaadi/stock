import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerNavComponent } from './worker-nav.component';

describe('WorkerNavComponent', () => {
  let component: WorkerNavComponent;
  let fixture: ComponentFixture<WorkerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
