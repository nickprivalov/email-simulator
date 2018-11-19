import { InboxComponent } from './inbox/inbox.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "inbox",
        component: InboxComponent
    },{
        path: '',
        redirectTo: "/inbox",
        pathMatch: "full"
    },{
        path: "**",
        redirectTo: "inbox",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
