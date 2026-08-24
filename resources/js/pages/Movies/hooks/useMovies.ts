import {router, usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {movie} from "@/pages/Movies/MoviesTypes.ts";

function useMovies() {
    const {currentModal, locale, movies} = usePage<PageProps<{ movies: { data: movie[] } }>>().props;
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

    const isOpen = Boolean(currentModal)
    return {isOpen, handleClose, movies}
}

export default useMovies;
