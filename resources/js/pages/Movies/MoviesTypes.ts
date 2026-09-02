export interface movie {
    id: number,
    image: string,
    title: string,
    year: number,
}
export interface MovieWithQuantity extends movie{
    commentQuantity:number
}
export interface MovieWithDetails extends movie {
    director: string;
    genres: string[];
}

export interface MovieProps {
    movie: MovieWithQuantity
}
