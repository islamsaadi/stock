import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMarketComponent } from './customer-market.component';

describe('CustomerMarketComponent', () => {
  let component: CustomerMarketComponent;
  let fixture: ComponentFixture<CustomerMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
