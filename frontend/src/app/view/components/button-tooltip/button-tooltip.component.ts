import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-tooltip',
  templateUrl: './button-tooltip.component.html',
  styleUrls: ['./button-tooltip.component.css']
})
export class ButtonTooltipComponent {
  @Input() title!:string | Date
  @Input() description!:string
}
