import Header from "@/pages/NewsFeed/components/Header/Header.tsx";
import QuoteCard from "@/pages/NewsFeed/components/QuoteCard/QuoteCard.tsx";
import {InfiniteScroll, usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";

function NewsFeed() {

    const {quotes} = usePage<PageProps<{ quotes: { data: QuoteCardData[] } }>>().props

    return <div className="w-full max-w-234.5 mx-auto  overflow-y-auto max-h-screen">
        <Header/>
        <div className="mt-4 flex flex-col gap-5">
            <InfiniteScroll data="quotes" buffer={500}>
                <div className="flex flex-col gap-5">
                    {quotes.data.map((e: QuoteCardData) => (
                        <QuoteCard key={e.id} quote={e}/>
                    ))}
                </div>

            </InfiniteScroll>

        </div>
    </div>
}

export default NewsFeed;
