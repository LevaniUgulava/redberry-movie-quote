import {movie} from "@/pages/Movies/MoviesTypes.ts";

export interface SelectMovieProps {
    movies: any,
    selectedMovie: movie | null,
    onSelect: (m: movie) => void,
    error?: string
}

export interface ActiveMovieProps {
    movie: movie
}
