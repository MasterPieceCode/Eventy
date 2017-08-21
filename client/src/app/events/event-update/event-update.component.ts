import { Component, OnInit, Input } from '@angular/core';
import { EventUpdate} from 'events/events';
import { Directive, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.scss']
})
export class EventUpdateComponent implements OnInit {

  @Input()
  public update: EventUpdate;

  constructor(private renderer: Renderer2, private el: ElementRef) {
   }

  ngOnInit() {
   const content = this.renderer.createText(this.update.content);
   const parentDiv = this.el.nativeElement.querySelector('#update-content');
   this.renderer.setProperty(parentDiv, 'innerHTML', this.update.content);
  }

}
