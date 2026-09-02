import {useHttp} from "@inertiajs/react";
import {store as storeLike} from "@/actions/App/Http/Controllers/LikeController.ts";
import {useState} from "react";

function useLike(id: number, isLiked: boolean|undefined, reaction_quantity: number) {
    const [liked, setLiked] = useState(isLiked);
    const [reactionQuantity, setReactionQuantity] = useState(reaction_quantity);
    const {post} = useHttp();

    const handleLike = () => {
        setLiked((prev) => !prev);
        setReactionQuantity((prev) => liked ? prev - 1 : prev + 1);

        post(storeLike({quote: id}).url, {
            onError: () => {
                setLiked((prev) => !prev);
                setReactionQuantity((prev) => liked ? prev + 1 : prev - 1);
            }
        });
    };
    return {handleLike, reactionQuantity, setReactionQuantity, liked}

}

export default useLike;
