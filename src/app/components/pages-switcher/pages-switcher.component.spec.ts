import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSwitcherComponent } from './pages-switcher.component';

describe('PagesSwitcherComponent', () => {
  let component: PagesSwitcherComponent;
  let fixture: ComponentFixture<PagesSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesSwitcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
