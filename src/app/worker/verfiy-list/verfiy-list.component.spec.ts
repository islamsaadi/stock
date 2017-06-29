import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfiyListComponent } from './verfiy-list.component';

describe('VerfiyListComponent', () => {
  let component: VerfiyListComponent;
  let fixture: ComponentFixture<VerfiyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfiyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfiyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
