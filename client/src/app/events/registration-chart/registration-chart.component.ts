import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Participant} from '../../../models/event';

import { Observable } from 'rxjs/rx';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registration-chart',
  templateUrl: './registration-chart.component.html',
  styleUrls: ['./registration-chart.component.scss']
})
export class RegistrationChartComponent implements OnInit {

  positions: any[] = [];
  maxParticipants: number;
  startDate: Date;
  endDate: Date;

  constructor(private http: HttpClient, private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {
    let participants: Participant[];

    this.http.get('/assets/participants.json', {responseType: 'json'})
    .map(data => {
        participants = data['participants'] as Participant[];
        console.log(participants);
        return participants;
      })
      .subscribe(p => {
          let earliest: Date;
          let latest: Date;
          let min = 1;
          let max = 1;

          const grouped =
          _.chain(p)
          .orderBy(f => f.registratedOn = new Date(f.registratedOn), 'registratedOn')
          .groupBy('registratedOn')
          .map((v, k) => {
           console.log('k', typeof(k));
            const date = new Date(k);

            if (!earliest || earliest > date) {
                earliest = date;
            }

            if (!latest || latest < date) {
                latest = date;
            }

            if (min > v.length) {
                min = v.length;
            }

            if (max < v.length) {
                max = v.length;
            }

            return {
              registratedOn: k,
              count : v.length
            };
          })
          .value();
        
          this.maxParticipants = max;
          this.startDate = earliest;
          this.endDate = latest;        

           console.log(grouped);

          const minValue = 90;
          const maxValue = 90;

          const duration = latest.valueOf() - earliest.valueOf();
          const count = max - min;
          let prevPos =  {
                    x1: 0,
                    x2: 0,
                    y1: 100,
                    y2: 100};

          grouped.forEach(g => {

              const newPos = {
                x1: prevPos.x2,
                y1: prevPos.y2,
                x2: 90 * ((new Date(g.registratedOn).valueOf() - earliest.valueOf())) / duration,
                y2: Math.max(100 * (1 - (g.count - min) / count), 10),
                registration: `${g.count} people on ${new Date(g.registratedOn).toDateString()}`
              };

              this.positions.push(newPos);

              prevPos = newPos;
             
              console.log(prevPos);
          });
    console.log(this.positions);
      });
  }

  public onHoverPath(registration: string): void {
    this.setTooltipText(registration);
  }

  public onHoverEnds(): void  {
    this.setTooltipText('Hover bold spots to see dynamics');
  }

  private setTooltipText(text: string): void {
    const tooltiptext = this.el.nativeElement.querySelector('#tooltiptext');
    this.renderer.setProperty(tooltiptext, 'innerText', text);
  }
}
