import {ActiveMovieProps} from "@/pages/NewsFeed/components/Quote/QuoteForm/QuoteFormTypes.ts";
import {MovieWithDetails} from "@/pages/Movies/MoviesTypes.ts";
import {useTranslation} from "react-i18next";

function ActiveMovie({movie}: {movie:MovieWithDetails}) {
    const {t} = useTranslation(["newsfeed", "common"]);
    return <div className="flex gap-4">
        <div className="max-w-72.5 w-full">
            <img className="w-full rounded-xl" alt="movie_image" src={movie.image}/>
        </div>
        <div className="flex flex-col gap-4">
            <div>
                                <span
                                    className="text-main-beige text-2xl font-medium leading-[150%]">{movie.title} ({movie.year})</span>
            </div>
            <div className='flex gap-3'>
                {movie.genres.map((genre: any) => (
                    <div className="px-[11.7px] py-[6.3px] rounded-lg bg-[#6C757D]">
                        <span className="text-white font-bold text-lg leading-[100%]">{genre}</span>
                    </div>
                ))}
            </div>
            <div className='flex gap-3'>
                <span className="text-[#CED4DA] text-lg font-bold leading-[150%]">{t("director")}</span>
                <span className='text-white font-medium text-lg leading-[150%]'>{movie.director}</span>
            </div>
        </div>
    </div>
}

export default ActiveMovie;
