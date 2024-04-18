import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObTypeComponent } from './ob-type.component';

describe('ObTypeComponent', () => {
  let component: ObTypeComponent;
  let fixture: ComponentFixture<ObTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
