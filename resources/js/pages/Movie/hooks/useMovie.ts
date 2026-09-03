import {router, usePage} from "@inertiajs/react";
import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import {destroy} from "@/actions/App/Http/Controllers/MovieController.ts";
import {useTranslation} from "react-i18next";

function useMovie() {
    const {movie, currentModal, locale, quote} = usePage<{
        currentModal: string,
        movie: any,
        quote: QuoteCardData
    }>().props
    const {t} = useTranslation("common");
    const handleDelete = () => {
        if (confirm(t("confirm_delete"))) {
            router.delete(destroy({movie: movie}).url);
        }
    }
    const quoteModals = ['view', 'edit']

    const openModal =
        currentModal === "create" ||
        (quoteModals.includes(currentModal) && Boolean(quote));

    const handleClose = () => {
        router.get(
            `/${locale}/movies/${movie.id}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    };
    return {handleClose,handleDelete,movie,openModal,currentModal,quote}
}

export default useMovie;
