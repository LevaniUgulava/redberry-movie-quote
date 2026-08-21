import Header from "@/pages/NewsFeed/components/Header/Header.tsx";
import QuoteCard from "@/pages/NewsFeed/components/QuoteCard/QuoteCard.tsx";
import {data} from "@/pages/NewsFeed/components/QuoteCard/TestData.ts";

function NewsFeed() {
    return <div className="w-full max-w-234.5 mx-auto">
        <Header/>
        <div className="mt-4 flex flex-col gap-5">
            {data.map((e) => (
                <QuoteCard key={e.id} quote={e}/>
            ))}
        </div>
    </div>
}

export default NewsFeed;
