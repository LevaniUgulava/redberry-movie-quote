import { useHttp, usePage } from "@inertiajs/react";
import { Dispatch, SetStateAction } from "react";
import { store } from "@/actions/App/Http/Controllers/CommentController.ts";
import { Comment } from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import { PageProps } from "@/types/PagePropsTypes.ts";

function useComment(
    id: number,
    comments: Comment[],
    setComments: Dispatch<SetStateAction<Comment[]>>,
    commentsQuantity: number,
    setCommentsQuantity: Dispatch<SetStateAction<number>>
) {
    const { auth } = usePage<PageProps>().props

    const { data, setData, post, processing } = useHttp({ comment: '' });

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
        post(store({ quote: id }).url, {
            onSuccess: () => setData('comment', ''),
            onError: handleError,
        });
    };

    const handleError = () => {
        setCommentsQuantity((prev) => prev - 1);
        setComments((prev) => prev.slice(1));
    };

    return {
        comments, commentsQuantity, submit, setCommentsQuantity, setComments,
        data, setData,
        processing,
    }
}

export default useComment;
