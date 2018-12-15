import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Email, EMAILS } from './emails';
import { MatPaginator } from '@angular/material';

@Component({
    selector: 'inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss']
})

export class InboxComponent implements OnInit {
    optionDisplayWarnings: boolean = false;
    optionChanceBad: number = 25;
    
    emails: MatTableDataSource<Email> = new MatTableDataSource<Email>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    selectedEmailIndex = 0;
    displayedColumns = [ "from", "subject" ];

    constructor() { }

    ngOnInit(): void {
        this.emails.paginator = this.paginator;
        this.generateEmails();
    }

    reset(): void {
        this.emails = new MatTableDataSource<Email>();
    }

    clean(): void {
        this.emails.data = this.emails.data.filter( email => {
            return email["danger"].length == 0;
        });
        this.emails.paginator.firstPage();
    }

    generateEmails(total: number = 50): void {
        // safeguard indices
        if (total > EMAILS.length) total = EMAILS.length;

        for (let i = 0; i < total; i++) {
            let x = (parseInt((Math.random() * 1000).toPrecision(3)) % EMAILS.length);
            let e = EMAILS[x];
            if (e["danger"] == "fraudSender") {
                e["fromName"] = "Microsoft";
                e["fromEmail"] = "support.help-desk@microsoft.cz";
            } else if (e["danger"] == "fraudLink") {
                e["fromName"] = "Google";
                e["fromEmail"] = "acconut@googles.nk.vt";
                e["subject"] = "Account security issue";
                e["content"] = "Please reset your account at the following link.";
            } else if (e["danger"] == "matchPattern") {
                e["subject"] = "Dating apps with singles just for you!"
                e["content"] = "There are single people in your area right now looking for you! Click below!";
            }
            if ((Math.random()*100) >= this.optionChanceBad) {
                if (e["danger"] == "fraudSender") {
                    e["fromName"] = "Microsoft";
                    e["fromEmail"] = "support@microsoft.com";
                } else if (e["danger"] == "fraudLink") {
                    e["fromName"] = "Google";
                    e["fromEmail"] = "help@google.com";
                    e["subject"] = "Account security issue";
                    e["content"] = "Please reset your account at the following link."
                    e["security"] = "S/MIME";
                } else if (e["danger"] == "matchPattern") {
                    e["subject"] = "Lorax Ipsums et cetera";
                    e["content"] = "Hello world! A normal email!";
                }
                e["danger"] = "";
            }
            this.emails.data.push(e);
        }
        this.emails.paginator = this.paginator;
        this.emails.paginator.firstPage();
    }

    getEmailField(field): string {
        return (this.emails.data[this.selectedEmailIndex]
            ? this.emails.data[this.selectedEmailIndex][field]
            : 'n/a');
    }

    // script | image | fraudSender | fraudLink | matchPattern
    isDanger(): boolean {
        if (this.emails.data[this.selectedEmailIndex] == null) return false;
        return this.emails.data[this.selectedEmailIndex]["danger"].length > 0;
    }

    displayDanger() {
        return (this.optionDisplayWarnings == true && this.emails.data[this.selectedEmailIndex]["danger"] != ''
            ? { 'height': 'fit-content' } 
            : { 'height': '0px', 'filter': 'opacity(0)' }
        );
    }

}
