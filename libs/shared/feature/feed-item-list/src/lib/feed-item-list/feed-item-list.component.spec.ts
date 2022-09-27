import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedItemListComponent } from './feed-item-list.component';

describe('FeedItemListComponent', () => {
  let component: FeedItemListComponent;
  let fixture: ComponentFixture<FeedItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedItemListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
