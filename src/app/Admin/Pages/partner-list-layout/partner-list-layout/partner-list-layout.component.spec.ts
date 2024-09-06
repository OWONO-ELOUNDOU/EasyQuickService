import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerListLayoutComponent } from './partner-list-layout.component';

describe('PartnerListLayoutComponent', () => {
  let component: PartnerListLayoutComponent;
  let fixture: ComponentFixture<PartnerListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerListLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnerListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
