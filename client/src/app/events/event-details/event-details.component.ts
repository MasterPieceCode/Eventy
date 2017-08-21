import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {EventInfo, EventUpdate} from 'events/events';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  public event: EventInfo;
  public updates: EventUpdate[] = [];

  constructor(  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
   this.route.params.subscribe(p => {
      this.event = p;
     });

     let updates: EventUpdate[];
     updates = [
       {
           date: '3 months ago',
           content: '<div> <h1>Бэннон уходит</h1><img src="../assets/img/meet3.jpg" style="float:right;max-width:200px"></img><p >На прошлой неделе, президент Дональд Трамп уволил своего главного стратега, Стива Бэннона. Его отставка — важный поворотный момент в президентстве Трампа. Бэннон был больше, чем главным стратегом. Он был идеологическим лидером «альт-правых» в Белом Доме. В течение многих лет, перед тем как присоединиться к кампании Трампа в последние месяцы выборной гонки, Бэннон отстаивал антилиберальные, популистские, националистические темы — со своей жердочки, будучи редактором и главой интернет-сайта Breitbart News. Он называл себя защитником белого рабочего класса (особенно его мужской части). Затем он представил эти идеи во время кампании Трампа и помог Трампу выиграть выборы в прошлом ноябре. В начале его президентства, многие комментаторы называли Бэннона наиболее могущественным человеком в руководстве страны после главы государства.</p> </div>'
        },
        
       {
           date: '5 months ago',
           content: '<h1>Update goes here</h1>'
        },
       {
           date: '6 months ago',
           content: '<h1>Update goes here</h1>'
        },
          
      ];

    //this.updates = Observable.from(updates);
    this.updates = updates;
  }
}
