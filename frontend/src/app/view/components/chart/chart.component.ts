import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Input } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { ChartInfo } from 'src/app/models/ChartInfo.interface';
import { ThemeService } from 'src/app/services/config/ThemeService.service';
import { Subscription } from 'rxjs';

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

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.theme$.subscribe(() => {
      this.updateChartColors();
    });
  
    setTimeout(() => {
      this.createChart();
    }, 0);
  }
  

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  private getCssVariableValue(variableName: string): string {
    const root = document.documentElement;
    const style = window.getComputedStyle(root);
    return style.getPropertyValue(variableName).trim() || '#000'; // Default to black if not found
  }

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
        datasets: [
          {
            label: this.data.label,
            data: this.data.data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
            hoverBorderColor: 'rgba(75, 192, 192, 1)',
            fill: this.data.fill,
            tension: 0.1,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
            pointRadius: 5
          }
        ]
      };

      const chartOptions = {
        plugins: {
          legend: {
            labels: {
              color: textColor // Color del texto de la leyenda
            }
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem: any) {
                return tooltipItem.label;
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
        }
      };

      this.chart = new Chart(ctx, {
        type: chartType,
        data: chartData,
        options: this.data.options || chartOptions
      });
    } else {
      console.error('Failed to acquire context from the canvas element.');
    }
  }

  private updateChartColors(): void {
    if (this.chart) {
      const textColor = this.getCssVariableValue('--text-color') || '#000'; // Default to black if not found

      if (this.chart.options.plugins && this.chart.options.plugins.legend && this.chart.options.plugins.legend.labels) {
        this.chart.options.plugins.legend.labels.color = textColor;
      }

      if (this.chart.options.scales) {
        const scales = this.chart.options.scales as any; // Cast to any to avoid TypeScript errors
        if (scales['x']) {
          scales['x'].ticks.color = textColor;
          scales['x'].title.color = textColor;
        }
        if (scales['y']) {
          scales['y'].ticks.color = textColor;
          scales['y'].title.color = textColor;
        }
      }

      this.chart.update();
    }
  }
}
