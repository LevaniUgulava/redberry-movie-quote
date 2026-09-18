import CommentIcon from "@/components/ui/icons/Movie/CommentIcon.tsx";
import {MovieProps} from "@/pages/Movies/MoviesTypes.ts";

function MovieCard({movie}: MovieProps) {
    const displayName = `${movie.title}(${movie.year})`;
    const truncatedName = displayName.length > 20 ? `${displayName.slice(0, 20)}...` : displayName;

    return <div className="flex flex-col gap-2.5">
        <div>
            <img
                className="w-full h-92.75 object-cover rounded-xl"
                alt="movie_image"
                src={movie.image}
            /></div>
        <div>
            <span
                className="text-2xl font-medium leading-[150%] text-white">{truncatedName}</span>
        </div>
        <div className="flex gap-2.5 items-center">
            <span className="text-xl text-white">{movie.commentQuantity}</span>
            <CommentIcon/>

        </div>
    </div>
}

export default MovieCard;
