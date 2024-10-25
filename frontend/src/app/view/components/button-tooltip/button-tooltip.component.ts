import { Component, Input, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { TimelineEvent } from 'src/app/models/timeline-event.interface';

@Component({
  selector: 'app-button-tooltip',
  templateUrl: './button-tooltip.component.html',
  styleUrls: ['./button-tooltip.component.css']
})
export class ButtonTooltipComponent  implements OnInit {
  @Input() evento !: TimelineEvent

  ngOnInit(): void {
    throwError("not yet")
  }
}
