import { Injectable } from '@angular/core';

export interface Email {
    to: string,
    from: string,
    cc: string,
    bcc: string,
    subject: string,
    content: string,
    security: string
}

@Injectable({
    providedIn: 'root'
})

export class EmailServerService {

    constructor() { }

    public generateEmails(): Email[] {
        let emails: Email[] = [];
        for (let i = 0; i < 10; i++) {
            let x = (Math.random() * 1000);
            let e: Email = {
                to: "YOU",
                from: "SOMEONE-"+x,
                cc: "",
                bcc: "",
                subject: (x.toString()),
                content: "Howdy!  "+(x.toString()),
                security: "256"
            };
            emails.push(e);
        }
        return emails;
    }
    
}
