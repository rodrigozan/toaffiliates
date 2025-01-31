import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordLowComponent } from './keyword-low.component';

describe('KeywordLowComponent', () => {
  let component: KeywordLowComponent;
  let fixture: ComponentFixture<KeywordLowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordLowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
