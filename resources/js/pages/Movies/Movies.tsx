import Header from "./components/Header/Header.tsx";
import MovieCard from "@/pages/Movies/components/MovieCard/MovieCard.tsx";
import MovieModal from "./components/Modal/MovieModal.tsx";

import useMovies from "@/pages/Movies/hooks/useMovies.ts";
import LocaleLink from "@/components/LocaleLink.tsx";
import {Head} from "@inertiajs/react";
import {useTranslation} from "react-i18next";

function Movies() {
    const {t} = useTranslation("movies");
    const {isOpen, handleClose, movies, editingMovie, isEditOpen} = useMovies();
    return <div className="max-lg:px-8.75 mt-10">
        <Head title={t("title")}/>

        <Header quantity={movies.data.length}/>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10 mt-13 ">
            {movies.data.map((movie) => (
                <LocaleLink href={`/movies/${movie.id}`} key={movie.id}>
                    <MovieCard movie={movie}/>
                </LocaleLink>
            ))}
            <MovieModal isOpen={isOpen} editingMovie={editingMovie} isEditOpen={isEditOpen} onClose={handleClose}/>
        </div>
    </div>
}

export default Movies;
