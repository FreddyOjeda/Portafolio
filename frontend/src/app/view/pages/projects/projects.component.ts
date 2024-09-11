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
      title: 'E-commerce Platform',
      description: 'An online platform to buy and sell products with a secure payment gateway.',
      image: 'assets/images/e-commerce.webp',
      link: 'https://myecommerceplatform.com'
    },
    {
      title: 'Social Network App',
      description: 'A full-featured social network app with real-time messaging and notifications.',
      image: 'assets/images/social-app.webp',
      link: 'https://mysocialnetworkapp.com'
    },
    {
      title: 'Project Management Tool',
      description: 'A tool to manage teams and projects, track progress, and collaborate efficiently.',
      image: 'https://xbsoftware.com/wp-content/uploads/2021/01/project-management-solution-for-construction-industry-main.jpg',
      link: 'https://myprojectmanagementtool.com'
    },
    {
      title: 'Social Network App',
      description: 'A full-featured social network app with real-time messaging and notifications.',
      image: 'assets/images/social-app.webp',
      link: 'https://mysocialnetworkapp.com'
    },
    {
      title: 'Project Management Tool',
      description: 'A tool to manage teams and projects, track progress, and collaborate efficiently.',
      image: 'https://xbsoftware.com/wp-content/uploads/2021/01/project-management-solution-for-construction-industry-main.jpg',
      link: 'https://myprojectmanagementtool.com'
    },
    {
      title: 'Social Network App',
      description: 'A full-featured social network app with real-time messaging and notifications.',
      image: 'assets/images/social-app.webp',
      link: 'https://mysocialnetworkapp.com'
    },
    {
      title: 'Project Management Tool',
      description: 'A tool to manage teams and projects, track progress, and collaborate efficiently.',
      image: 'https://xbsoftware.com/wp-content/uploads/2021/01/project-management-solution-for-construction-industry-main.jpg',
      link: 'https://myprojectmanagementtool.com'
    },
    {
      title: 'Social Network App',
      description: 'A full-featured social network app with real-time messaging and notifications.',
      image: 'assets/images/social-app.webp',
      link: 'https://mysocialnetworkapp.com'
    },
    {
      title: 'Project Management Tool',
      description: 'A tool to manage teams and projects, track progress, and collaborate efficiently.',
      image: 'https://xbsoftware.com/wp-content/uploads/2021/01/project-management-solution-for-construction-industry-main.jpg',
      link: 'https://myprojectmanagementtool.com'
    }
  ];
}
