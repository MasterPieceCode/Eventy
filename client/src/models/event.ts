export interface EventInfo {
    category: string;
    description: string;
    organizer: string;
    participantsCount: number;
    imgURL: string;
    name: string;
    date: Date;
    city: string;
    country: string;
    address: string;
    externalLinks: ExternalLink[];
}


export interface ExternalLink {
    title: string;
    URL: string;
    type: string;
}

export enum ExternalLinkType {
}