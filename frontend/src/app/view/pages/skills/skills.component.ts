import { Component, OnInit } from '@angular/core';
import { ChartInfo } from 'src/app/models/ChartInfo.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  barChartInfo: ChartInfo = {
    labels: ['January', 'February', 'March', 'April'],
    label: 'My Bar Chart',
    data: [10, 20, 30, 40],
    fill: false,
    type: 'bar'
  };

  lineChartInfo: ChartInfo = {
    labels: ['January', 'February', 'March', 'April'],
    label: 'My Line Chart',
    data: [5, 45, 25, 35],
    fill: false,
    type: 'line'
  };

  pieChartInfo: ChartInfo = {
    labels: ['Red', 'Blue', 'Yellow'],
    label: 'My Pie Chart',
    data: [10, 20, 30],
    fill: false,
    type: 'pie',
    options: {
      plugins: {
        backgroundColor: 'rgba(54, 162, 235, 0.2)' // Fondo azul claro
      }
    }
  };

  doughnutChartInfo: ChartInfo = {
    labels: ['Red', 'Blue', 'Green'],
    label: 'My Doughnut Chart',
    data: [15, 25, 35],
    fill: false,
    type: 'doughnut',
    options: {
      plugins: {
        backgroundColor: 'rgba(153, 102, 255, 0.2)' // Fondo morado claro
      }
    }
  };

  ngOnInit(): void {
    // Inicialización si es necesario
  }
}
