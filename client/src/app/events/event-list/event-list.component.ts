import { Component, OnInit } from '@angular/core';
import { EventInfo, ExternalLink } from '../../../models/event';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public events: Observable<EventInfo[]>;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.events = this.http.get('/assets/events.json', {responseType: 'json'})
    .map(data => {
        const links = data['externalLinks'] as ExternalLink[];
        const eventInfo =  data['events'] as EventInfo[];
        Observable.from(eventInfo).subscribe(ei => {
          ei.externalLinks = links;
         } );
        return eventInfo;
      }); }

  public onSelectEvent(event: EventInfo): Promise<boolean> {
    console.log('');
      return this.router.navigate(['/eventDetails', event], {skipLocationChange: true});
  }
}
