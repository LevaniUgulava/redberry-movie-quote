export interface Comment {
    comment: string;
    user: {
        username: string,
        avatar: string
    }
}

export interface Movie {
    title: string;
    year: string;
}

export interface User {
    username: string;
    avatar: string;
}


export interface QuoteCardData {
    id: number;
    quote?: string;
    en_quote?: string;
    ka_quote?: string;
    image: string;
    comment_quantity: number;
    reaction_quantity: number;
    comments: Comment[];
    movie?: Movie;
    user?: User;
    is_liked?: boolean;
}

export interface QuoteCardProps {
    quote: QuoteCardData;
}
