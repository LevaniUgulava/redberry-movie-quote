import useQuoteDelete from "@/pages/NewsFeed/components/Quote/hooks/useQuoteDelete.ts";

function usePopover(movie_id:number,id:number){
    const url = (modal: string) => {
        return `/movies/${movie_id}?modal=${modal}&quote_id=${id}`
    }
    const {deleteQuote} = useQuoteDelete();

    return {url,deleteQuote}
}
export default usePopover;
