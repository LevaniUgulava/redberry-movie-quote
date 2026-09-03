import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import useCommentLikeSocket from "@/hooks/useCommentLikeSocket.ts";
import useLike from "@/pages/NewsFeed/components/QuoteCard/hooks/useLike.ts";
import useIsMobile from "@/hooks/useIsMobile.ts";
import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";

function useQuoteCard(quote:QuoteCardData){
    const {auth} = usePage<PageProps>().props

    const {
        commentsQuantity,
        reactionQuantity,
        setReactionQuantity
    } = useCommentLikeSocket(quote.id, auth.id, quote.comments, quote.comment_quantity, quote.reaction_quantity,false)

    const { handleLike, liked } = useLike(
        quote.id, quote.is_liked, reactionQuantity, setReactionQuantity
    )
    const isMobile = useIsMobile();
    return {isMobile,handleLike,liked,commentsQuantity,reactionQuantity}
}
export default useQuoteCard;
