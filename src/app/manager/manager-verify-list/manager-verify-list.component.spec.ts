import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerVerifyListComponent } from './manager-verify-list.component';

describe('ManagerVerifyListComponent', () => {
  let component: ManagerVerifyListComponent;
  let fixture: ComponentFixture<ManagerVerifyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerVerifyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerVerifyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
