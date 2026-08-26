import {useState} from "react";
import {useForm, usePage} from "@inertiajs/react";
import {store} from "@/actions/App/Http/Controllers/CommentController.ts";
import {Comment} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import {PageProps} from "@/types/PagePropsTypes.ts";

function useComment(id: number, quoteComments: Comment[], comment_quantity: number,) {
    const {auth} = usePage<PageProps>().props

    const [comments, setComments] = useState(quoteComments);
    const [commentsQuantity, setCommentsQuantity] = useState(comment_quantity);

    const {data, setData, post, processing, reset} = useForm({
        comment: '',
    });

    const submit = (e: any) => {
        e.preventDefault();
        setComments((prevComments: any) => [
                {
                    comment: data.comment,
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

        post(store({id: id}).url, {
            preserveScroll: true,
            onSuccess: () => reset('comment'),
            onError: handleError,
        });
    };
    const handleError = () => {
        setCommentsQuantity((prev) => prev - 1);
        setComments((prev) => prev.slice(1));
    };
    return {
        comments, commentsQuantity, submit, setCommentsQuantity, setComments,
        data,
        processing,
        setData,
    }
}

export default useComment;
