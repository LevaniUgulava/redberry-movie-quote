import { useState, Dispatch, SetStateAction } from "react";
import { router } from "@inertiajs/react";
import { store as storeLike } from "@/actions/App/Http/Controllers/LikeController.ts";

function useLike(
    id: number,
    isLiked: boolean | undefined,
    reactionQuantity: number,
    setReactionQuantity: Dispatch<SetStateAction<number>>
) {
    const [liked, setLiked] = useState(isLiked);

    const handleLike = () => {
        setLiked((prev) => !prev);
        setReactionQuantity((prev) => liked ? prev - 1 : prev + 1);

        router.post(storeLike({ quote: id }).url, {}, {
            preserveScroll: true,
            onError: () => {
                setLiked((prev) => !prev);
                setReactionQuantity((prev) => liked ? prev + 1 : prev - 1);
            }
        });
    };

    return { handleLike, reactionQuantity, liked }
}

export default useLike;
