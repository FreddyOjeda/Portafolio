export interface ChartInfo {
    labels: string[];
    label: string;
    data: number[];
    fill: boolean;
    type: string;
        options?: any; // Opcional: para opciones adicionales del gráfico
}
