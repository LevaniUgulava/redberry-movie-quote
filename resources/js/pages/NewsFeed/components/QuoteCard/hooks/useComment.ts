import {useState} from "react";
import {useHttp, usePage} from "@inertiajs/react";
import {store} from "@/actions/App/Http/Controllers/CommentController.ts";
import {Comment} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import {PageProps} from "@/types/PagePropsTypes.ts";

function useComment(id: number, quoteComments: Comment[], comment_quantity: number,) {
    const {auth} = usePage<PageProps>().props

    const [comments, setComments] = useState(quoteComments);
    const [commentsQuantity, setCommentsQuantity] = useState(comment_quantity);
    const [comment, setComment] = useState('');
    const {data, setData, post, processing} = useHttp({comment: ''});

    const submit = (e: any) => {
        e.preventDefault();
        setComments((prevComments: any) => [
                {
                    comment,
                    user: {
                        id: auth.id,
                        username: auth.username,
                        avatar: auth.avatar
                    }
                },
                ...prevComments.slice(0, 1)
            ]
        );
        setCommentsQuantity((prev) => prev + 1)

        setData('comment', comment);
        post(store({id: id}).url, {
            onSuccess: () => setComment(''),
            onError: handleError,
        });
    };
    const handleError = () => {
        setCommentsQuantity((prev) => prev - 1);
        setComments((prev) => prev.slice(1));
    };
    return {
        comments, commentsQuantity, submit, setCommentsQuantity, setComments,
        comment,
        processing,
        setComment,
    }
}

export default useComment;
