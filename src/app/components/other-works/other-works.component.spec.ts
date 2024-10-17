import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWorksComponent } from './other-works.component';

describe('OtherWorksComponent', () => {
  let component: OtherWorksComponent;
  let fixture: ComponentFixture<OtherWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherWorksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
