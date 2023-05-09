import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalreviewComponent } from './modalreview.component';

describe('ModalreviewComponent', () => {
  let component: ModalreviewComponent;
  let fixture: ComponentFixture<ModalreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
