import { Component, OnInit } from '@angular/core';
import {EventInfo} from '../../../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.sass']
})
export class EventListComponent implements OnInit {

  public events: EventInfo[];

  constructor() { }

  ngOnInit() {
    this.events = [
      {
        category: 'Political',
        description: 'Super meeting',
        organizer: 'Narod',
        participantsCount: 1203,
        imgURL: '../assets/img/meet3.jpg',
        name: 'Occupy Wall Street',
        date: new Date(2017, 8, 23, 14, 30),
        country: 'Russia',
        city: 'Moscow',
        address: 'Saharova pr'
      }
    ];
  }

}
