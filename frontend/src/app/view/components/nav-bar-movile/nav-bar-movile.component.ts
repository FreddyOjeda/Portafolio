import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-movile',
  templateUrl: './nav-bar-movile.component.html',
  styleUrls: ['./nav-bar-movile.component.css']
})
export class NavBarMovileComponent {
  isMenuOpen = false;
  @Input() items!:any[]

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

}
