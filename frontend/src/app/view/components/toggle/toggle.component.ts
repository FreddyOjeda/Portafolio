// src/app/toggle/toggle.component.ts
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
