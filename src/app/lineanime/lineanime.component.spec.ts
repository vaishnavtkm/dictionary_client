import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineanimeComponent } from './lineanime.component';

describe('LineanimeComponent', () => {
  let component: LineanimeComponent;
  let fixture: ComponentFixture<LineanimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineanimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineanimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
