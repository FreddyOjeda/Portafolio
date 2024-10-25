import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('navbarAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-100%)' // Mueve el navbar hacia arriba
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)' // Muestra el navbar en su posición original
      })),
      transition('hidden => visible', [
        animate('300ms ease-in') // Tiempo de animación al mostrar
      ]),
      transition('visible => hidden', [
        animate('300ms ease-out') // Tiempo de animación al ocultar
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {
  items: any[] = [
    { label: 'NAV.ABOUT_ME', value: 'section1' },
    { label: 'NAV.SKILLS', value: 'section2' },
    { label: 'NAV.HISTORY', value: 'section3' },
    { label: 'NAV.PROJECTS', value: 'section4' },
    { label: 'NAV.TALK_ME', value: 'section5' }
  ];

  isRootUrl: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Comprobar si la URL actual es la raíz al cargar el componente
    this.isRootUrl = this.router.url === '/';

    // Suscribirse a eventos de navegación para actualizar el valor de isRootUrl
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isRootUrl = event.urlAfterRedirects === '/';
      }
    });
  }
}
