import { Component, Input } from '@angular/core';
import { TimelineEvent } from 'src/app/models/timeline-event.interface';

@Component({
  selector: 'app-timeline-movile',
  templateUrl: './timeline-movile.component.html',
  styleUrls: ['./timeline-movile.component.css']
})
export class TimelineMovileComponent {
  @Input() events!: TimelineEvent[];

  selectedEvent: any = null;

  openModal(event: any) {
    this.selectedEvent = event;
  }

  closeModal(event?: MouseEvent) {
    if (event) {
      const target = event.target as HTMLElement;
      if (target.classList.contains('modal-overlay')) {
        this.selectedEvent = null;
      }
    } else {
      this.selectedEvent = null;
    }
  }

}
