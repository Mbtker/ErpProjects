import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObDataComponent } from './ob-data.component';

describe('ObDataComponent', () => {
  let component: ObDataComponent;
  let fixture: ComponentFixture<ObDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
