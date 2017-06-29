import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerActivateListComponent } from './manager-activate-list.component';

describe('ManagerActivateListComponent', () => {
  let component: ManagerActivateListComponent;
  let fixture: ComponentFixture<ManagerActivateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerActivateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerActivateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
