import {useState} from "react";
import {router} from "@inertiajs/react";
import {store as storeLike} from "@/actions/App/Http/Controllers/LikeController.ts";

function useLike(id: number, isLiked: boolean|undefined, reaction_quantity: number) {
    const [liked, setLiked] = useState(isLiked);
    const [reactionQuantity, setReactionQuantity] = useState(reaction_quantity);

    const handleLike = () => {
        setLiked((prev) => !prev);
        setReactionQuantity((prev) => liked ? prev - 1 : prev + 1);

        router.post(storeLike({quote: id}).url, {}, {
            preserveScroll: true,
            onError: () => {
                setLiked((prev) => !prev);
                setReactionQuantity((prev) => liked ? prev + 1 : prev - 1);
            }
        });
    };
    return {handleLike, reactionQuantity, setReactionQuantity, liked}

}

export default useLike;
