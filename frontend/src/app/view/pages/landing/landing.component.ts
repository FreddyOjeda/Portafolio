import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  items: any[]= [
    {label:'About me', value:'section1'},
    {label:'Skills', value:'section2'},
    {label:'History', value:'section3'},
    {label:'Projects', value:'section4'},
    {label:'Talk me', value:'section5'}
  ]

}
