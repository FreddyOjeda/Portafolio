import { Component, OnInit } from '@angular/core';
import { ChartInfo } from 'src/app/models/ChartInfo.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // Obtener el valor de las variables CSS
  getCssVariable = (variable: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  };

  // Definir la configuración del Radar Chart
  radarChartInfo: ChartInfo = {
    type: 'radar',
    labels: ['Development', 'Knowledge', 'Experience', 'Enjoyment', 'Deployment', 'Scalability', 'Agility'], // Ejes del radar
    datasets: [
      {
        label: 'BackEnd Skills', // Etiqueta para el primer conjunto de datos
        data: [90, 85, 75, 70, 60, 65, 80], // Valores de habilidades para el primer conjunto de datos
        fill: true, // Rellenar el área del radar
        borderColor: '#00f0f0', // Color del borde del área del radar
        backgroundColor: '#00f0f0' + '33' // Color de fondo del área del radar (transparente)
      },
      {
        label: 'FrontEnd Skills', // Etiqueta para el segundo conjunto de datos
        data: [80, 70, 85, 80, 75, 70, 85], // Valores de habilidades para el segundo conjunto de datos
        fill: true, // Rellenar el área del radar
        borderColor: '#39ff14', // Color del borde del área del radar
        backgroundColor: '#39ff14' + '33' // Color de fondo del área del radar (transparente)
      }
    ],
    options: {
      responsive: true,
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100,
          angleLines: {
            color: this.getCssVariable('--border-color') // Color de las líneas radiales
          },
          grid: {
            color: this.getCssVariable('--border-color') // Color de la cuadrícula
          },
          pointLabels: {
            font: {
              size: 14 // Tamaño de las etiquetas
            },
            color: this.getCssVariable('--text-color')
          }
        }
      },
      elements: {
        line: {
          borderWidth: 3 // Ancho de las líneas del radar
        },
        polygon: {
          backgroundColor: 'transparent' // Color de fondo del área del radar
        }
      }
    }
  };


  doughnutChartInfo: ChartInfo = {
    type: 'doughnut',
    labels: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js'], // Etiquetas para las secciones del donut
    datasets: [
      {
        label: 'Habilidades del Desarrollador', // Etiqueta para el conjunto de datos
        data: [20, 15, 25, 30, 10], // Datos para el conjunto de datos
        backgroundColor: [
          this.getCssVariable('--primary-color'), // Color de fondo de la primera sección
          this.getCssVariable('--secondary-color'), // Color de fondo de la segunda sección
          this.getCssVariable('--link-color'), // Color de fondo de la tercera sección
          this.getCssVariable('--button-bg'), // Color de fondo de la cuarta sección
          this.getCssVariable('--border-color') // Color de fondo de la quinta sección
        ],
        borderColor: this.getCssVariable('--text-color'), // Color del borde de las secciones
      }
    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right', // Posición de la leyenda
          labels: {
            color: this.getCssVariable('--text-color') // Color de las etiquetas en la leyenda
          }
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem:any) {
              const dataLabel = tooltipItem.label || '';
              const value = tooltipItem.raw;
              return `${value}%`; // Formato del texto en el tooltip
            }
          }
        }
      },
      cutout: '50%', // Tamaño del agujero en el centro del donut
      elements: {
        arc: {
          borderWidth: 2 // Ancho del borde del donut
        }
      }
    }
  };

  ngOnInit(): void {
    // Inicialización si es necesario
  }
}
