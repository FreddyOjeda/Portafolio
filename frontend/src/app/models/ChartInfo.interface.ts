export interface ChartInfo {
    type: string; 
    labels: string[];
    datasets: Array<{
        label: string;      // Etiqueta para el conjunto de datos
        data: number[];    // Datos para el conjunto de datos
        fill?: boolean;    // Si el área del radar debe estar rellena
        borderColor?: string; // Color del borde del área del radar
        backgroundColor?: string | string[]; // Color de fondo del área del radar
    }>;
    options?: any;  
}
