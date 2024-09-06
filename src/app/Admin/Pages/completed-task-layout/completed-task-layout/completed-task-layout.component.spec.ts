import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTaskLayoutComponent } from './completed-task-layout.component';

describe('CompletedTaskLayoutComponent', () => {
  let component: CompletedTaskLayoutComponent;
  let fixture: ComponentFixture<CompletedTaskLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedTaskLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedTaskLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
