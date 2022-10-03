import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBottomComponent } from './side-nav-bottom.component';

describe('SideNavBottomComponent', () => {
  let component: SideNavBottomComponent;
  let fixture: ComponentFixture<SideNavBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavBottomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
