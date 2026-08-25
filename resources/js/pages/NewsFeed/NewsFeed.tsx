import Header from "@/pages/NewsFeed/components/Header/Header.tsx";
import QuoteCard from "@/pages/NewsFeed/components/QuoteCard/QuoteCard.tsx";
import {data} from "@/pages/NewsFeed/components/QuoteCard/TestData.ts";
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";

function NewsFeed() {

    const {quotes} = usePage<PageProps<{quotes:any}>>().props

    return <div className="w-full max-w-234.5 mx-auto">
        <Header/>
        <div className="mt-4 flex flex-col gap-5">
            {quotes.data.map((e:any) => (
                <QuoteCard key={e.id} quote={e}/>
            ))}
        </div>
    </div>
}

export default NewsFeed;
