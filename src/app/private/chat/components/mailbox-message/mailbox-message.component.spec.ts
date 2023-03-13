import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxMessageComponent } from './mailbox-message.component';

describe('MailboxMessageComponent', () => {
  let component: MailboxMessageComponent;
  let fixture: ComponentFixture<MailboxMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailboxMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
