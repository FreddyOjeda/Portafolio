import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  text: string = "I'm a creative FullStack Developer";
  displayText: string = "";
  index: number = 0;
  direction: number = 1; // 1 for typing, -1 for deleting
  showCursor: boolean = true;

  ngOnInit(): void {
    this.type();
  }

  type(): void {
    this.displayText = this.text.slice(0, this.index);
    this.index += this.direction;

    if (this.index === this.text.length + 1) {
      this.direction = -1;
      setTimeout(() => this.type(), 1000); // Pause before deleting
    } else if (this.index === 0) {
      this.direction = 1;
      setTimeout(() => this.type(), 500); // Pause before retyping
    } else {
      setTimeout(() => this.type(), this.direction === 1 ? 100 : 50); // Typing and deleting speed
    }
  }

}
