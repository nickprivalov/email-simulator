import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
// Material imports
import { MatCardModule, MatDialogModule, MatTooltipModule, MatButtonModule, 
         MatSlideToggleModule, MatSliderModule, MatPaginatorModule, 
         MatTableModule } from '@angular/material';
// TODO probably gonna need MatBadgeModule for email indicators, MatProgressSpinnerModule for risk severity

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { InboxComponent } from './inbox/inbox.component';

// Services
import { EmailServerService } from './services/email-server.service';


@NgModule({
    declarations: [
        AppComponent,
        InboxComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatCardModule, 
        MatDialogModule, 
        MatTooltipModule, 
        MatButtonModule, 
        MatSlideToggleModule, 
        MatSliderModule, 
        MatPaginatorModule, 
        MatTableModule
    ],
    providers: [
        EmailServerService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
