import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'voteways', loadChildren: () => import('./voteways/voteways.module').then(m => m.VoteWaysModule) },
        { path: 'earlyvote', loadChildren: () => import('./earlyvote/earlyvote.module').then(m => m.EarlyVoteModule) },
        { path: 'electionday', loadChildren: () => import('./electionday/electionday.module').then(m => m.ElectionDayModule) },
        { path: 'mailvote', loadChildren: () => import('./mailvote/mailvote.module').then(m => m.MailVoteModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: 'point', loadChildren: () => import('./point/point.module').then(m => m.PointModule) },
        { path: 'award', loadChildren: () => import('./award/award.module').then(m => m.AwardModule) },
        { path: 'usage', loadChildren: () => import('./usage/usage.module').then(m => m.UsageModule) },
        { path: 'contactus', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) },
        { path: 'mailbox', loadChildren: () => import('./mailbox/mailbox.module').then(m => m.MailboxModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
