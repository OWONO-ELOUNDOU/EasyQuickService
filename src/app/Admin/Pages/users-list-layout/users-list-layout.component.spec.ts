import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListLayoutComponent } from './users-list-layout.component';

describe('UsersListLayoutComponent', () => {
  let component: UsersListLayoutComponent;
  let fixture: ComponentFixture<UsersListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersListLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
