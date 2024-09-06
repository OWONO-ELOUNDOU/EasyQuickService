import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileLayoutComponent } from './admin-profile-layout.component';

describe('AdminProfileLayoutComponent', () => {
  let component: AdminProfileLayoutComponent;
  let fixture: ComponentFixture<AdminProfileLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProfileLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProfileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
