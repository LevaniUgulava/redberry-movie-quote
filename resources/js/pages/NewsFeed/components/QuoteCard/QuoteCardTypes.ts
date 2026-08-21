export interface Comment {
    comment: string;
    user_avatar: string;
    user_name: string;
}

export interface content {
    title: string,
    movie: string,
    year: string
}

export interface Quote {
    content: content;
    image: string;
    comment_quantity: string;
    reaction_quantity: string;
    comments: Comment[];
}

export  interface QuoteEntry {
    quote: {
        quote: Quote;
        user_avatar: string;
        user_name: string;
    }
}
