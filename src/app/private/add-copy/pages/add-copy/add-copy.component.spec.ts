import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCopyComponent } from './add-copy.component';

describe('AddCopyComponent', () => {
  let component: AddCopyComponent;
  let fixture: ComponentFixture<AddCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
