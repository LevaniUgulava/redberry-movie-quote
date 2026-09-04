import Header from "@/pages/NewsFeed/components/Header/Header.tsx";
import QuoteCard from "@/pages/NewsFeed/components/QuoteCard/QuoteCard.tsx";
import NewsFeedEmptyState from "@/pages/NewsFeed/components/EmptyState/NewsFeedEmptyState.tsx";
import {Head, InfiniteScroll, usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import {useTranslation} from "react-i18next";

function NewsFeed() {
    const {t} = useTranslation("newsfeed");
    const {quotes} = usePage<PageProps<{ quotes: { data: QuoteCardData[] } }>>().props
    const hasSearch = new URLSearchParams(window.location.search).get("filter[search]") !== null;

    return <div className="w-full max-w-234.5 mx-auto overflow-y-auto max-h-screen mt-10">
        <Head title={t("title")}/>
        <Header/>
        <div className="mt-4 flex flex-col gap-5">
            {quotes.data.length === 0 ? (
                <NewsFeedEmptyState hasSearch={hasSearch}/>
            ) : (
                <InfiniteScroll data="quotes" buffer={500}>
                    <div className="flex flex-col gap-5">
                        {quotes.data.map((e: QuoteCardData) => (
                            <QuoteCard key={e.id} quote={e}/>
                        ))}
                    </div>
                </InfiniteScroll>
            )}
        </div>
    </div>
}

export default NewsFeed;