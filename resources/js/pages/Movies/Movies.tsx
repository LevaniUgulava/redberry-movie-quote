import Header from "./components/Header/Header.tsx";
import MovieCard from "@/pages/Movies/components/MovieCard/MovieCard.tsx";
import MovieModal from "./components/Modal/MovieModal.tsx";

import useMovies from "@/pages/Movies/hooks/useMovies.ts";
import LocaleLink from "@/components/LocaleLink.tsx";

function Movies() {
    const {isOpen, handleClose, movies, editingMovie, isEditOpen} = useMovies();
    return <div>

        <Header/>
        <div className="grid grid-cols-3 gap-10 mt-13">
            {movies.data.map((movie) => (
                <LocaleLink href={`/movies/${movie.id}`}>
                    <MovieCard movie={movie}/>
                </LocaleLink>
            ))}
            <MovieModal isOpen={isOpen} editingMovie={editingMovie} isEditOpen={isEditOpen} onClose={handleClose}/>
        </div>
    </div>
}

export default Movies;
