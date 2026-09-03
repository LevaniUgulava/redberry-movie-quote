// useCommentLikeSocket.ts
import {useEcho} from "@laravel/echo-react";
import {useState} from "react";
import {Comment} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";

function useCommentLikeSocket(
    quote_id: number,
    auth_id: number,
    initialComments: Comment[],
    initialCommentsQuantity: number,
    initialReactionQuantity: number,
    hasComment: boolean = true
) {
    const [comments, setComments] = useState(initialComments);
    const [commentsQuantity, setCommentsQuantity] = useState(initialCommentsQuantity);
    const [reactionQuantity, setReactionQuantity] = useState(initialReactionQuantity);

    useEcho(`quote.${quote_id}`,
        ['.commentAdded', '.LikeUpdated'], (e) => {
            if (e.comment && e.comment.user.id !== auth_id) {
                setCommentsQuantity((prev) => prev + 1);
                if(hasComment){
                    setComments((prev) => [e.comment, ...prev.slice(0, 1)]);

                }
            }
            if (e.likeUpdated && e.likeUpdated.user !== auth_id) {
                setReactionQuantity((prev) => e.likeUpdated.isLiked ? prev + 1 : prev - 1);
            }
        })

    return {
        comments, setComments,
        commentsQuantity, setCommentsQuantity,
        reactionQuantity, setReactionQuantity
    }
}

export default useCommentLikeSocket;
