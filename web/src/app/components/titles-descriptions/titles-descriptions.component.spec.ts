import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesDescriptionsComponent } from './titles-descriptions.component';

describe('TitlesDescriptionsComponent', () => {
  let component: TitlesDescriptionsComponent;
  let fixture: ComponentFixture<TitlesDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlesDescriptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlesDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
