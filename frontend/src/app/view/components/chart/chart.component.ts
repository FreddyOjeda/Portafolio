import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Input } from '@angular/core';
import { Chart, ChartType, RadialLinearScaleOptions } from 'chart.js/auto';
import { ChartInfo } from 'src/app/models/ChartInfo.interface';
import { ThemeService } from 'src/app/services/config/ThemeService.service';
import { Subscription } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;
  private themeSubscription!: Subscription;

  @Input() data!: ChartInfo;
  private langChangeSubscription!: Subscription; // Definir la propiedad

  constructor(private themeService: ThemeService, private translateService: TranslateService) { }

  ngOnInit(): void {
    // Suscribirse a los cambios de tema
    this.themeSubscription = this.themeService.theme$.subscribe(() => {
      this.updateChartColors();
    });

    // Suscribirse a los cambios de idioma
    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.handleLanguageChange(event);
    });

    setTimeout(() => {
      this.createChart(); // Crear gráfico inicial
    }, 0);
  }

  ngOnDestroy(): void {
    // Limpiamos las suscripciones y destruimos la gráfica cuando el componente se destruya
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe(); // Limpiar suscripción a cambios de idioma
    }
  }

  private handleLanguageChange(event: LangChangeEvent): void {
    // Lógica que deseas ejecutar cuando el idioma cambie
    if (this.chart && this.chart.options && this.chart.options.scales && this.chart.options.scales['r']) {;
      if (event.lang == 'es') {
        this.chart.data.labels = ['Desarrollo', 'Conocimiento', 'Experiencia', 'Agrado', 'Despliegue', 'Escalabilidad', 'Agilidad']
        this.chart.data.datasets = [
          {
            label: 'Habilidades BackEnd', // Etiqueta para el primer conjunto de datos
            data: [90, 85, 75, 70, 60, 65, 80], // Valores de habilidades para el primer conjunto de datos
            fill: true, // Rellenar el área del radar
            borderColor: '#00f0f0', // Color del borde del área del radar
            backgroundColor: '#00f0f0' + '33' // Color de fondo del área del radar (transparente)
          },
          {
            label: 'Habilidades FrontEnd', // Etiqueta para el segundo conjunto de datos
            data: [80, 70, 85, 80, 75, 70, 85], // Valores de habilidades para el segundo conjunto de datos
            fill: true, // Rellenar el área del radar
            borderColor: '#39ff14', // Color del borde del área del radar
            backgroundColor: '#39ff14' + '33' // Color de fondo del área del radar (transparente)
          }
        ]
      } else {
        this.chart.data.labels = ['Development', 'Knowledge', 'Experience', 'Enjoyment', 'Deployment', 'Scalability', 'Agility']
          this.chart.data.datasets = [
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
        ]
      }
    }
    this.updateChartColors(); // Actualiza colores o cualquier otra cosa que necesites
  }

  // Método para obtener el valor de una variable CSS
  private getCssVariableValue(variableName: string): string {
    const root = document.documentElement;
    const style = window.getComputedStyle(root);
    return style.getPropertyValue(variableName).trim() || '#000'; // Default a negro si no se encuentra la variable
  }

  // Método para crear la gráfica inicial
  private createChart(): void {
    if (this.chartCanvas?.nativeElement) {
      const ctx = this.chartCanvas.nativeElement.getContext('2d');
      if (!ctx) {
        console.error('Failed to get 2D context from the canvas element.');
        return;
      }

      const textColor = this.getCssVariableValue('--text-color');
      const chartType: ChartType = this.data.type as ChartType;

      const chartData = {
        labels: this.data.labels,
        datasets: this.data.datasets.map(dataset => ({
          ...dataset,
          backgroundColor: dataset.backgroundColor || this.getCssVariableValue('--primary-color'), // Usar variable CSS
          borderColor: dataset.borderColor || this.getCssVariableValue('--secondary-color'), // Usar variable CSS
          borderWidth: 1
        }))
      };

      const chartOptions = {
        responsive: false,
        plugins: {
          legend: {
            labels: {
              color: textColor // Color del texto de la leyenda
            }
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem: any) {
                return tooltipItem.raw + '%';
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColor // Color del texto del eje X
            },
            title: {
              color: textColor // Color del título del eje X
            }
          },
          y: {
            ticks: {
              color: textColor // Color del texto del eje Y
            },
            title: {
              color: textColor // Color del título del eje Y
            }
          }
        },
        ...(this.data.options || {})
      };

      // Crear gráfica
      this.chart = new Chart(ctx, {
        type: chartType,
        data: chartData,
        options: chartOptions
      });
    } else {
      console.error('Failed to acquire context from the canvas element.');
    }
  }

  // Método para actualizar los colores de la gráfica según el tema actual
  private updateChartColors(): void {

    if (this.chart) {
      const textColor = this.getCssVariableValue('--text-color') || '#000'; // Predeterminado a negro si no se encuentra el color

      // Actualizamos el color de la leyenda
      if (this.chart.options.plugins?.legend?.labels) {
        this.chart.options.plugins.legend.labels.color = textColor;
      }

      // Actualizamos los colores de los ejes
      if (this.chart.options.scales) {
        const scales = this.chart.options.scales as any; // Evitamos errores de TypeScript
        if (scales['x']) {
          scales['x'].ticks.color = textColor;
          scales['x'].title.color = textColor;
        }
        if (scales['y']) {
          scales['y'].ticks.color = textColor;
          scales['y'].title.color = textColor;
        }
      }

      // Actualizar los colores de los datasets
      if (this.chart.id != '0') {
        this.chart.data.datasets.forEach(dataset => {
          dataset.backgroundColor = [
            this.getCssVariableValue('--primary-color'), // Color de fondo de la primera sección
            this.getCssVariableValue('--secondary-color'), // Color de fondo de la segunda sección
            this.getCssVariableValue('--link-color'), // Color de fondo de la tercera sección
            this.getCssVariableValue('--button-bg'), // Color de fondo de la cuarta sección
            this.getCssVariableValue('--border-color') // Color de fondo de la quinta sección
          ];
          dataset.borderColor = this.getCssVariableValue('--text-color');
        });
      } else {
        // Verifica que `this.chart` y sus propiedades existan antes de intentar acceder a ellas
        if (this.chart && this.chart.options && this.chart.options.scales && this.chart.options.scales['r']) {
          // Realiza un cast explícito de radarScale a RadialLinearScaleOptions
          const radarScale = this.chart.options.scales['r'] as RadialLinearScaleOptions;

          if (radarScale.pointLabels) {
            radarScale.pointLabels.color = this.getCssVariableValue('--text-color');
          }
        }
      }

      // Finalmente actualizamos la gráfica
      this.chart.update();
    }
  }
}
