import Header from "@/pages/NewsFeed/components/Header/Header.tsx";
import QuoteCard from "@/pages/NewsFeed/components/QuoteCard/QuoteCard.tsx";
import {Head, usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import { QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import {useTranslation} from "react-i18next";

function NewsFeed() {

    const {t} = useTranslation("newsfeed");
    const {quotes} = usePage<PageProps<{ quotes: { data: QuoteCardData[] } }>>().props

    return <div className="w-full max-w-234.5 mx-auto mt-10">
        <Head title={t("title")}/>
        <Header/>
        <div className="mt-4 flex flex-col gap-5">
            {quotes.data.map((e: QuoteCardData) => (
                <QuoteCard key={e.id} quote={e}/>
            ))}
        </div>
    </div>
}

export default NewsFeed;
