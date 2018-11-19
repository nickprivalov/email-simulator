import { Component } from '@angular/core';
import { EmailServerService } from '../services/email-server.service';

@Component({
    selector: 'inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss']
})

export class InboxComponent {

    emails;

    displayedColumns = [ /*"to",*/ "from", /*"cc", "bcc",*/ "subject"/*, "content", "security" */];

    constructor(private emailService: EmailServerService) {
        this.emails = this.emailService.generateEmails();
    }

}
