import {router, usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {movie, MovieWithDetails, MovieWithQuantity} from "@/pages/Movies/MoviesTypes.ts";

function useMovies() {
    const {currentModal, locale, movies, editingMovie} = usePage<PageProps<{ movies: { data: MovieWithQuantity[]; total: number; current_page: number } }>>().props;
    const handleClose = () => {
        router.get(
            `/${locale}/movies`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    };

    const searchParams = new URLSearchParams(window.location.search);
    const movieId = searchParams.get('id');

    const isCreateOpen = currentModal === 'create';
    const isEditOpen = currentModal === 'edit' && Boolean(movieId);

    const isOpen = Boolean(isCreateOpen) || Boolean(isEditOpen)

    return {isOpen, handleClose, movies, editingMovie,isEditOpen}
}

export default useMovies;
