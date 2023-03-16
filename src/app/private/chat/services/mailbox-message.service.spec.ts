import { TestBed } from '@angular/core/testing';

import { MailboxMessageService } from './mailbox-message.service';

describe('MailboxMessageService', () => {
  let service: MailboxMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailboxMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
