import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalstockComponent } from './modalstock.component';

describe('ModalstockComponent', () => {
  let component: ModalstockComponent;
  let fixture: ComponentFixture<ModalstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
