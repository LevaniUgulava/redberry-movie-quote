export interface movie {
    id:number,
    image: string,
    title: string,
    year: number,
    commentQuantity: number,
}

export interface MovieProps {
    movie: movie
}
