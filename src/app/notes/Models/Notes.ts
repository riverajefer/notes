export interface Note {
    id: string;
    title: string;
    description: string;
    date: Date;
    archive?: boolean;
}

export interface Notes {
    notes: Note[];
}
