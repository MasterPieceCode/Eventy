import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventListComponent, EventDetailsComponent} from './events';

const routes: Routes = [
    { path: 'events', component : EventListComponent },
    { path: 'eventDetails', component : EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EventsRoutingModule { }
