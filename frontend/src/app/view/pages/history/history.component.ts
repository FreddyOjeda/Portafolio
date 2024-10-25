import { Component } from '@angular/core';
import { TimelineEvent } from 'src/app/models/timeline-event.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  eventList = [
    {
      date: new Date(Date.UTC(2019,3,8,12)),
      title: 'HISTORY.EVENT_1.TITLE',
      description: 'HISTORY.EVENT_1.DESCRIPTION',
      image: 'assets/images/uptc-sogamoso.jpg'
    },
    {
      date: new Date(Date.UTC(2023,2,27,12)),
      title: 'HISTORY.EVENT_2.TITLE',
      description: 'HISTORY.EVENT_2.DESCRIPTION',
      image: '../../../../assets/images/full-stack.webp'
    },
    {
      date: new Date(Date.UTC(2024,3,4,12)),
      title: 'HISTORY.EVENT_3.TITLE',
      description: 'HISTORY.EVENT_3.DESCRIPTION',
      image: '../../../../assets/images/talentotech.png'
    },
    {
      date: new Date(Date.UTC(2024,7,1,12)),
      title: 'HISTORY.EVENT_4.TITLE',
      description: 'HISTORY.EVENT_4.DESCRIPTION',
      image: '../../../../assets/images/freelancer.jpg'
    },
    {
      date: new Date(Date.UTC(2024,7,16,12)),
      title: 'HISTORY.EVENT_5.TITLE',
      description: 'HISTORY.EVENT_5.DESCRIPTION',
      image: '../../../../assets/images/certificado.png'
    }
  ];

  constructor(private httpClient: HttpClient){}

}
