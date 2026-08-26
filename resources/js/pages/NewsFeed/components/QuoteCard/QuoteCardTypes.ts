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

export interface Quote {
    quote: {
        id: number;
        quote: string;
        image: string;
        comment_quantity: number;
        reaction_quantity: number;
        comments: Comment[];
        movie: Movie;
        user: User;
        is_liked: boolean
    }
}
