import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Email, EMAILS } from '../inbox/emails';

@Injectable({
    providedIn: 'root'
})

export class EmailServerService {

    constructor(private http: HttpClient) { }

    
}
