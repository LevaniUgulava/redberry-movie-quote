import {SearchX} from "lucide-react";
import {useTranslation} from "react-i18next";
import {router} from "@inertiajs/react";
import {index} from "@/actions/App/Http/Controllers/QuoteController.ts";
import {usePage} from "@inertiajs/react";

function NewsFeedEmptyState({hasSearch}: { hasSearch: boolean }) {
    const {t} = useTranslation("newsfeed");
    const {locale} = usePage().props;

    const clearSearch = () => {
        router.get(index.url({lang: locale}), {}, {preserveScroll: true, replace: true});
    };

    return (
        <div className="w-full flex flex-col justify-center items-center gap-12 py-24">
            <SearchX size={122} strokeWidth={1.5} className="text-[#6C757D]"/>
            <div className="flex flex-col items-center text-center gap-6">
                <span className="text-white text-4xl font-bold">
                    {hasSearch ? t("no_quotes_found") : t("no_quotes_title")}
                </span>
                <span className="text-white text-2xl font-medium">
                    {hasSearch ? t("no_quotes_desc") : t("no_quotes_add_hint")}
                </span>
            </div>
            {hasSearch && (
                <button
                    onClick={clearSearch}
                    className="bg-main-red hover:bg-[#CC0E10] rounded-[4.8px] text-xl px-4.25 py-2.25 text-white cursor-pointer transition-colors"
                >
                    {t("clear_search")}
                </button>
            )}
        </div>
    );
}

export default NewsFeedEmptyState;
