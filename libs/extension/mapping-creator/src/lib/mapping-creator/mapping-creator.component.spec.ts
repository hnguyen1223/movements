import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingCreatorComponent } from './mapping-creator.component';

describe('MappingCreatorComponent', () => {
  let component: MappingCreatorComponent;
  let fixture: ComponentFixture<MappingCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MappingCreatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MappingCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
