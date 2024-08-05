import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent {
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  private timer: any;
  private duration: number = 43200 * 60; // 1 hour in seconds

  ngOnInit() {
    this.startCountdown(this.duration);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startCountdown(duration: number) {
    let timer = duration, hours, minutes, seconds;

    this.timer = setInterval(() => {
      hours = Math.floor(timer / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = Math.floor(timer % 60);

      this.hours = hours < 10 ? '0' + hours : hours.toString();
      this.minutes = minutes < 10 ? '0' + minutes : minutes.toString();
      this.seconds = seconds < 10 ? '0' + seconds : seconds.toString();

      if (--timer < 0) {
        clearInterval(this.timer);
        this.hours = this.minutes = this.seconds = '00';
        // Opcional: puedes agregar una lógica adicional aquí, como mostrar un mensaje de "Tiempo terminado"
      }
    }, 1000);
  }
}
