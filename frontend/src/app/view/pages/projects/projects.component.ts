import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'PROJECTS.PROJECT_1.TITLE',
      description: 'PROJECTS.PROJECT_1.DESCRIPTION',
      image: '../../../../assets/images/wabisabi.png',
      link: 'https://wabisabi-lu.netlify.app/'
    },
    {
      title: 'PROJECTS.PROJECT_2.TITLE',
      description: 'PROJECTS.PROJECT_2.DESCRIPTION',
      image: '../../../../assets/images/toilsyc.png',
      link: 'https://toilsyc.netlify.app/login'
    },
    {
      title: 'PROJECTS.PROJECT_3.TITLE',
      description: 'PROJECTS.PROJECT_3.DESCRIPTION',
      image: '../../../../assets/images/atlantis.png',
      link: 'https://atlantis-six.vercel.app/'
    }
  ];
}
