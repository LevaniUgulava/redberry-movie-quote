import {QuoteModalProps} from "@/pages/NewsFeed/components/Quote/QuoteModal/QuoteModalTypes.ts";
import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import useQuoteDelete from "@/pages/NewsFeed/components/Quote/hooks/useQuoteDelete.ts";

function useQuoteModal(modal: string, quote: QuoteCardData | undefined, movie_id?: number) {

    const {deleteQuote} = useQuoteDelete();
    const isEdit = modal === 'edit' && !!quote;
    const isView = modal === 'view' && !!quote;
    const isExistQuote = isView || isEdit;

    const url = (modal: string) => {
        return `/movies/${movie_id}?modal=${modal}&quote_id=${quote?.id}`
    }
    const handleDelete = () => {
        if (quote) {
            deleteQuote(quote.id);
        }
    }
    return {url, isExistQuote, isEdit, isView, handleDelete}
}

export default useQuoteModal;
