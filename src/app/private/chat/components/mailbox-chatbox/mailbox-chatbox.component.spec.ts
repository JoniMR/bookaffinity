import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxChatboxComponent } from './mailbox-chatbox.component';

describe('MailboxChatboxComponent', () => {
  let component: MailboxChatboxComponent;
  let fixture: ComponentFixture<MailboxChatboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailboxChatboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
