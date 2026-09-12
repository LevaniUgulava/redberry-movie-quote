// useCommentLikeSocket.ts
import {useEcho} from "@laravel/echo-react";
import {useState} from "react";
import {Comment} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";

function useCommentLikeSocket(
    quote_id: number,
    auth_id: number,
    initialCommentsQuantity: number,
    initialReactionQuantity: number,
    setComments?: (fn: (prev: Comment[]) => Comment[]) => void,
    hasComment: boolean = true
) {
    const [commentsQuantity, setCommentsQuantity] = useState(initialCommentsQuantity);
    const [reactionQuantity, setReactionQuantity] = useState(initialReactionQuantity);

    useEcho(`quote.${quote_id}`,
        ['.commentAdded', '.LikeUpdated'], (e) => {
            if (e.comment) {
                setCommentsQuantity((prev) => prev + 1);
                if(hasComment && setComments && e.comment.user.id !== auth_id){
                    setComments((prev) => [...prev, e.comment]);

                }
            }
            if (e.likeUpdated && e.likeUpdated.user !== auth_id) {
                setReactionQuantity((prev) => e.likeUpdated.isLiked ? prev + 1 : prev - 1);
            }
        })

    return {
        commentsQuantity, setCommentsQuantity,
        reactionQuantity, setReactionQuantity
    }
}

export default useCommentLikeSocket;
