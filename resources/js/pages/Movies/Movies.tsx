import Header from "./components/Header/Header.tsx";
import {TestMovies} from "@/pages/Movies/TestMovies.ts";
import MovieCard from "@/pages/Movies/components/MovieCard/MovieCard.tsx";
import MovieModal from "./components/Modal/MovieModal.tsx";
import {router, usePage} from "@inertiajs/react";
import {MODALS} from "@/constants/Modal.ts";
import {movie} from "@/pages/Movies/MoviesTypes.ts";
import {PageProps} from "@/types/PagePropsTypes.ts";
import useMovies from "@/pages/Movies/hooks/useMovies.ts";

function Movies() {
    const {isOpen, handleClose, movies,editingMovie,isEditOpen} = useMovies();
    return <div>

        <Header/>
        <div className="grid grid-cols-3 gap-10 mt-13">
            {movies.data.map((movie: movie) => (
                <MovieCard movie={movie}/>
            ))}
            <MovieModal isOpen={isOpen} editingMovie={editingMovie} isEditOpen={isEditOpen} onClose={handleClose}/>
        </div>
    </div>
}

export default Movies;
