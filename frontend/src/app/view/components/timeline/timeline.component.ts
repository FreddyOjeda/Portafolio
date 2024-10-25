import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TimelineEvent } from 'src/app/models/timeline-event.interface';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() events!: TimelineEvent[];
  ngOnInit(): void {
    
  }
}
