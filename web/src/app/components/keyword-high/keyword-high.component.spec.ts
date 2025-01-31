import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordHighComponent } from './keyword-high.component';

describe('KeywordHighComponent', () => {
  let component: KeywordHighComponent;
  let fixture: ComponentFixture<KeywordHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordHighComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
