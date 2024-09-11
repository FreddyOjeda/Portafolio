// timeline.component.ts
export interface TimelineEvent {
    date: Date;
    title: string;
    description: string;
    image?: string; // La imagen es opcional
}