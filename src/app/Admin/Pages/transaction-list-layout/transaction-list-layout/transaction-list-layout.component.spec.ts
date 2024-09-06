import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListLayoutComponent } from './transaction-list-layout.component';

describe('TransactionListLayoutComponent', () => {
  let component: TransactionListLayoutComponent;
  let fixture: ComponentFixture<TransactionListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionListLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
