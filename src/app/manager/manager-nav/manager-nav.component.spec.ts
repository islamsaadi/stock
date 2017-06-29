import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerNavComponent } from './manager-nav.component';

describe('ManagerNavComponent', () => {
  let component: ManagerNavComponent;
  let fixture: ComponentFixture<ManagerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
