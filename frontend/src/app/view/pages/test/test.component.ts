import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements AfterViewInit {
  @ViewChild('myElement') myElement!: ElementRef;
  @ViewChild('startBtn') startBtn!: ElementRef;

  ngAfterViewInit() {
    const startBtnClick$ = fromEvent(this.startBtn.nativeElement, 'click');
    const move$ = startBtnClick$.pipe(
      switchMap(() => {
        return fromEvent<MouseEvent>(document, 'mousemove').pipe(
          map((event: MouseEvent) => event.clientX),
          takeUntil(fromEvent(this.startBtn.nativeElement, 'click'))
        );
      })
    );

    move$.subscribe(x => {
      this.myElement.nativeElement.style.transform = `translateX(${x}px)`;
    });
  }
}
