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
    isParticipant?: boolean;
    isOrganizer?: boolean;
    updates?: EventUpdate[];
}

export interface ExternalLink {
    title: string;
    URL: string;
    type: string;
}

export enum ExternalLinkType {
}

export interface EventUpdate {
    date: string;
    content: string;
}

export interface Participant {
    registratedOn: Date;
}
