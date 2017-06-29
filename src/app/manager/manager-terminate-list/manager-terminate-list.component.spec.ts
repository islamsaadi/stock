import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTerminateListComponent } from './manager-terminate-list.component';

describe('ManagerTerminateListComponent', () => {
  let component: ManagerTerminateListComponent;
  let fixture: ComponentFixture<ManagerTerminateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTerminateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTerminateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
