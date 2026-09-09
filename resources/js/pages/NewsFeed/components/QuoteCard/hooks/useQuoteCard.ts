import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import useComment from "@/pages/NewsFeed/components/QuoteCard/hooks/useComment.ts";
import useLike from "@/pages/NewsFeed/components/QuoteCard/hooks/useLike.ts";
import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import useCommentLikeSocket from "@/hooks/useCommentLikeSocket.ts";
import useLoadMoreComments from "@/pages/NewsFeed/components/QuoteCard/hooks/useLoadMoreComments.ts";

function useQuoteCard(quote: QuoteCardData) {
    const {auth} = usePage<PageProps>().props

    const {
        comments, setComments,
        hasMore, loadMore, processing: loadingComments
    } = useLoadMoreComments(quote.id)

    const {
        commentsQuantity, setCommentsQuantity,
        reactionQuantity, setReactionQuantity
    } = useCommentLikeSocket(
        quote.id, auth.id, quote.comment_quantity, quote.reaction_quantity, setComments
    )

    const { submit, data, setData, processing } = useComment(
        quote.id, comments, setComments, commentsQuantity, setCommentsQuantity
    )

    const { handleLike, liked } = useLike(
        quote.id, quote.is_liked, reactionQuantity, setReactionQuantity
    )

    return {
        auth,
        comments,
        commentsQuantity,
        hasMore,
        loadMore,
        loadingComments,
        submit,
        comment: data.comment,
        setComment: (value: string) => setData('comment', value),
        processing,
        reactionQuantity,
        handleLike,
        liked
    }
}

export default useQuoteCard;
