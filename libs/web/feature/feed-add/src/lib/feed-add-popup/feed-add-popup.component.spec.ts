import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedAddPopupComponent } from './feed-add-popup.component';

describe('FeedAddPopupComponent', () => {
  let component: FeedAddPopupComponent;
  let fixture: ComponentFixture<FeedAddPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedAddPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedAddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
