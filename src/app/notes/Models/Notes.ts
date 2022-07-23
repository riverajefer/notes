export interface Note {
    id: number;
    title: string;
    description: string;
    date: Date;
    archive?: boolean;
}

export interface Notes {
    notes: Note[];
}
