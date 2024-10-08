import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglewordComponent } from './singleword.component';

describe('SinglewordComponent', () => {
  let component: SinglewordComponent;
  let fixture: ComponentFixture<SinglewordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglewordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglewordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
