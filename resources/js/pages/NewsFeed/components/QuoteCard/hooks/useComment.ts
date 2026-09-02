import { useForm, usePage } from "@inertiajs/react";
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

    const { data, setData, post, processing, reset } = useForm({
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

        post(store({ id: id }).url, {
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
        comments, commentsQuantity, submit,
        data,
        processing,
        setData,
    }
}

export default useComment;
