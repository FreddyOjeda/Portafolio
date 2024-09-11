import { Component } from '@angular/core';
import { TimelineEvent } from 'src/app/models/timeline-event.interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  eventList = [
    {
      date: new Date('2023-01-15'),
      title: 'Launch of the Project',
      description: 'The project was officially launched with a kick-off meeting.',
      image: 'assets/images/launch.jpg'
    },
    {
      date: new Date('2023-02-10'),
      title: 'First Milestone',
      description: 'The team successfully completed the first milestone of the project.',
      image: 'assets/images/milestone1.jpg'
    },
    {
      date: new Date('2023-03-05'),
      title: 'Client Presentation',
      description: 'Presented the project progress to the client for feedback.',
      image: 'assets/images/presentation.jpg'
    },
    {
      date: new Date('2023-04-20'),
      title: 'Feature Release',
      description: 'Released the first major feature of the project to production.'
    },
    {
      date: new Date('2023-06-15'),
      title: 'Project Completion',
      description: 'The project was completed and handed over to the client.',
      image: 'assets/images/completion.jpg'
    }
  ];

}
