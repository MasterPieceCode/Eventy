import { Component, OnInit } from '@angular/core';
import { EventInfo, ExternalLink } from '../../../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public events: EventInfo[];

  constructor() { }

  ngOnInit() {
    this.events = [
      {
        category: 'political',
        description: `Посмотрите сюда: https://vk.com/wall-55284725_470527 Здесь вы увидите всю страну. Всю нашу Россиюшку, которая более чем сотней городов хочет сказать: коррупция — она не просто коррупция. Она порождает бедность. Она порождает бесправие. Она блокирует любую реформу и любое благое начинание.
        Будьте завтра со своей страной и своим народом. Не говорите «это бесполезно». Хуже этого — вообще ничего нет. На таких «этобесполезно» и держатся путинские друзья-миллиардеры.`,
        organizer: 'Narod',
        participantsCount: 1203,
        imgURL: '../assets/img/meet3.jpg',
        name: 'Occupy Wall Street',
        date: new Date(2017, 8, 23, 14, 30),
        country: 'Russia',
        city: 'Moscow',
        address: 'Saharova pr',
        externalLinks: this.getExternalLinks()
      },
      {
        category: 'economy',
        description: 'Super meeting',
        organizer: 'Narod',
        participantsCount: 1203,
        imgURL: '../assets/img/meet1.jpg',
        name: 'Occupy Wall Street',
        date: new Date(2017, 8, 23, 14, 30),
        country: 'Russia',
        city: 'Moscow',
        address: 'Saharova pr',
        externalLinks: this.getExternalLinks()
      },
      {
        category: 'social',
        description: 'Super meeting',
        organizer: 'Narod',
        participantsCount: 1203,
        imgURL: '../assets/img/meet4.jpg',
        name: 'Occupy Wall Street',
        date: new Date(2017, 8, 23, 14, 30),
        country: 'Russia',
        city: 'Moscow',
        address: 'Saharova pr',
        externalLinks: this.getExternalLinks()
      },
      {
        category: 'ecology',
        description: 'Super meeting',
        organizer: 'Narod',
        participantsCount: 1203,
        imgURL: '../assets/img/meet5.jpg',
        name: 'Occupy Wall Street',
        date: new Date(2017, 8, 23, 14, 30),
        country: 'Russia',
        city: 'Moscow',
        address: 'Saharova pr',
        externalLinks: this.getExternalLinks()
      },
    ];
  }

  private getExternalLinks(): ExternalLink[] {
    return [
      {
        title: 'Youtube',
        type: 'youtube-share-url',
        URL: 'youtube.com'
       },
      {
        title: 'Facebook',
        type: 'facebook-share-url',
        URL: 'facebook.com'
       },
      {
        title: 'Twitter',
        type: 'twitter-share-url',
        URL: 'youtube.com'
       },
      {
        title: 'Telegram',
        type: 'telegram-share-url',
        URL: 'telegram.com'
       },

      {
        title: 'VK',
        type: 'vk-share-url',
        URL: 'vk.com'
       },
      {
        title: 'Odnoklassniki',
        type: 'ok-share-url',
        URL: 'ok.com'
       },
    ];
  }

}
