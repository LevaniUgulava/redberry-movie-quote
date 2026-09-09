import {useHttp} from "@inertiajs/react";
import {useEffect, useState} from "react";
import {index} from "@/actions/App/Http/Controllers/CommentController.ts";
import {Comment} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";

interface LoadMoreCommentsResponse {
    data: Comment[];
    has_more: boolean;
}

function useLoadMoreComments(id: number) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const {get, processing} = useHttp();

    const loadComments = (nextPage: number) => {
        get(index({quote: id}, {query: {page: nextPage}}).url, {
            onSuccess: (response) => {
                const data = response as LoadMoreCommentsResponse;
                const reversed = [...data.data].reverse();
                setComments((prev) => [...reversed, ...prev]);
                setHasMore(data.has_more);
                setPage(nextPage);
            },
        });
    };

    useEffect(() => {
        loadComments(1);
    }, []);

    const loadMore = () => {
        if (!processing && hasMore) {
            loadComments(page + 1);
        }
    };

    return {
        comments,
        setComments,
        hasMore,
        loadMore,
        processing,
    };
}

export default useLoadMoreComments;
