import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";

export interface QuoteModalProps {
    isOpen: boolean,
    handleClose: VoidFunction
    modal:string,
    quote:QuoteCardData,
    movie_id?:number
}
