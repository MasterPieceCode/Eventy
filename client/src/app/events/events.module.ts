import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {EventsRoutingModule} from './events-routing.module';

import { EventListComponent, EventDetailsComponent, EventUpdateComponent } from './events';

@NgModule({
  declarations: [
    EventListComponent,
    EventDetailsComponent,
    EventUpdateComponent
  ],
  imports: [
    BrowserModule,
    EventsRoutingModule,
    HttpClientModule
  ],
  providers: [],
})

export class EventsModule { }
