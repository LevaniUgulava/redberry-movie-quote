import Header from "./components/Header/Header.tsx";
import MovieCard from "@/pages/Movies/components/MovieCard/MovieCard.tsx";
import MovieModal from "./components/Modal/MovieModal.tsx";
import MoviesEmptyState from "./components/EmptyState/MoviesEmptyState.tsx";
import Spinner from "@/components/ui/Spinner.tsx";
import useInertiaLoading from "@/hooks/useInertiaLoading.ts";

import useMovies from "@/pages/Movies/hooks/useMovies.ts";
import LocaleLink from "@/components/LocaleLink.tsx";
import {Head, InfiniteScroll} from "@inertiajs/react";
import {useTranslation} from "react-i18next";

function Movies() {
    const {t} = useTranslation("movies");
    const {isOpen, handleClose, movies, editingMovie, isEditOpen} = useMovies();
    const hasSearch = new URLSearchParams(window.location.search).get("filter[search]") !== null;

    const inertiaLoading = useInertiaLoading(movies.data.length > 0);

    return <div className="max-lg:px-8.75 mt-10">
        <Head title={t("title")}/>

        <Header quantity={movies.meta.total}/>
        {inertiaLoading ? (
            <div className="flex justify-center items-center py-20">
                <Spinner/>
            </div>
        ) : movies.data.length === 0 ? (
            <MoviesEmptyState hasSearch={hasSearch}/>
        ) : (
            <InfiniteScroll data="movies" buffer={500}>
                {({loading}) => (
                    <>
                        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10 mt-13 ">
                            {movies.data.map((movie) => (
                                <LocaleLink href={`/movies/${movie.id}`} key={movie.id}>
                                    <MovieCard movie={movie}/>
                                </LocaleLink>
                            ))}
                        </div>
                        {loading && (
                            <div className="flex justify-center items-center py-8">
                                <Spinner/>
                            </div>
                        )}
                    </>
                )}
            </InfiniteScroll>
        )}
        <MovieModal isOpen={isOpen} editingMovie={editingMovie} isEditOpen={isEditOpen} onClose={handleClose}/>
    </div>
}

export default Movies;
