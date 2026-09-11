import LocaleLink from "@/components/LocaleLink.tsx";
import AddIcon from "@/components/ui/icons/Movie/AddIcon.tsx";
import {SearchX} from "lucide-react";
import {useTranslation} from "react-i18next";
import {router} from "@inertiajs/react";
import {index} from "@/actions/App/Http/Controllers/MovieController.ts";

function MoviesEmptyState({hasSearch}: { hasSearch: boolean }) {
    const {t} = useTranslation(["movies", "common"]);

    const clearSearch = () => {
        router.get(index.url(), {}, {preserveScroll: true, replace: true});
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-12 py-24">
            <SearchX size={122} strokeWidth={1.5} className="text-[#6C757D]"/>
            <div className="flex flex-col items-center text-center gap-6">
                <span className="text-white text-4xl font-bold">
                    {hasSearch ? t("no_movies_found") : t("no_movies_title")}
                </span>
                <span className="text-white text-2xl font-medium">
                    {hasSearch ? t("no_movies_desc") : t("no_movies_add_hint")}
                </span>
            </div>
            {hasSearch ? (
                <button
                    onClick={clearSearch}
                    className="bg-main-red hover:bg-[#CC0E10] rounded-[4.8px] text-xl px-4.25 py-2.25 text-white cursor-pointer transition-colors"
                >
                    {t("clear_search")}
                </button>
            ) : (
                <LocaleLink
                    href="/movies?modal=create"
                    className="flex gap-2.5 items-center px-4.25 py-2.25 bg-main-red hover:bg-[#CC0E10] rounded-sm cursor-pointer transition-colors"
                >
                    <AddIcon/>
                    <span className="text-white text-xl leading-[150%] font-normal">{t("add_movie")}</span>
                </LocaleLink>
            )}
        </div>
    );
}

export default MoviesEmptyState;
