import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { TimelineEvent } from 'src/app/models/timeline-event.interface';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent{
  @Input() events!: TimelineEvent[]
}
