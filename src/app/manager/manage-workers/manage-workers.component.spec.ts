import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkersComponent } from './manage-workers.component';

describe('ManageWorkersComponent', () => {
  let component: ManageWorkersComponent;
  let fixture: ComponentFixture<ManageWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
