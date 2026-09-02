import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {useEcho} from "@laravel/echo-react";

import useComment from "@/pages/NewsFeed/components/QuoteCard/hooks/useComment.ts";
import useLike from "@/pages/NewsFeed/components/QuoteCard/hooks/useLike.ts";
import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";

function useQuoteCard(quote: QuoteCardData) {
    const {auth} = usePage<PageProps>().props


    const {
        commentsQuantity,
        comments,
        submit,
        setCommentsQuantity,
        setComments,
        comment,
        processing,
        setComment,
    } = useComment(quote.id, quote.comments, quote.comment_quantity)

    const {
        handleLike,
        reactionQuantity,
        setReactionQuantity,
        liked
    } = useLike(quote.id, quote.is_liked, quote.reaction_quantity)


    useEcho(`quote.${quote.id}`,
        ['.commentAdded', '.LikeUpdated'], (e) => {
            if (e.comment && e.comment.user.id !== auth.id) {
                setCommentsQuantity((prev) => prev + 1);
                setComments((prev) => [e.comment, ...prev.slice(0, 1)]);
            }
            if (e.likeUpdated && e.likeUpdated.user !== auth.id) {
                setReactionQuantity((prev) => e.likeUpdated.isLiked ? prev + 1 : prev - 1);
            }
        })


    return {
        auth,
        comments,
        commentsQuantity,
        submit,
        comment,
        processing,
        setComment,
        reactionQuantity,
        handleLike,
        liked
    }
}

export default useQuoteCard;
