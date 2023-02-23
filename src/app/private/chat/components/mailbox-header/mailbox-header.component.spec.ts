import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxHeaderComponent } from './mailbox-header.component';

describe('MailboxHeaderComponent', () => {
  let component: MailboxHeaderComponent;
  let fixture: ComponentFixture<MailboxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailboxHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
