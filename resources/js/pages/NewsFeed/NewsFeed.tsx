import Header from "@/pages/NewsFeed/components/Header/Header.tsx";
import QuoteCard from "@/pages/NewsFeed/components/QuoteCard/QuoteCard.tsx";
import NewsFeedEmptyState from "@/pages/NewsFeed/components/EmptyState/NewsFeedEmptyState.tsx";
import Spinner from "@/components/ui/Spinner.tsx";
import useInertiaLoading from "@/hooks/useInertiaLoading.ts";
import {Head, InfiniteScroll, usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import {useTranslation} from "react-i18next";

function NewsFeed() {
    const {t} = useTranslation("newsfeed");
    const {quotes} = usePage<PageProps<{ quotes: { data: QuoteCardData[] } }>>().props
    const hasSearch = new URLSearchParams(window.location.search).get("filter[search]") !== null;

    const inertiaLoading = useInertiaLoading(quotes.data.length > 0);

    return <div className="w-full max-w-234.5 mx-auto mt-10">
        <Head title={t("title")}/>
        <Header/>
        <div className="mt-4 flex flex-col gap-5">
            {inertiaLoading ? (
                <div className="flex justify-center items-center py-20">
                    <Spinner/>
                </div>
            ) : quotes.data.length === 0 ? (
                <NewsFeedEmptyState hasSearch={hasSearch}/>
            ) : (
                <InfiniteScroll data="quotes" buffer={500}>
                    {({loading}) => (
                        <div className="flex flex-col gap-5">
                            {quotes.data.map((e: QuoteCardData) => (
                                <QuoteCard key={e.id} quote={e}/>
                            ))}
                            {loading && (
                                <div className="flex justify-center items-center py-8">
                                    <Spinner/>
                                </div>
                            )}
                        </div>
                    )}
                </InfiniteScroll>
            )}
        </div>
    </div>
}

export default NewsFeed;
