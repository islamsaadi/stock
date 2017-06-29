import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymantTransactionsComponent } from './paymant-transactions.component';

describe('PaymantTransactionsComponent', () => {
  let component: PaymantTransactionsComponent;
  let fixture: ComponentFixture<PaymantTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymantTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymantTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
