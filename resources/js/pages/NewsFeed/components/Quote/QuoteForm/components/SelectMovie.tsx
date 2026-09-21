import FilmIcon from "@/components/ui/icons/Quote/FilmIcon.tsx";
import {cn} from "@/lib/utils.ts";
import SelectIcon from "@/components/ui/icons/Quote/SelectIcon.tsx";
import {useState} from "react";
import {movie} from "@/pages/Movies/MoviesTypes.ts";
import {SelectMovieProps} from "@/pages/NewsFeed/components/Quote/QuoteForm/QuoteFormTypes.ts";
import {useTranslation} from "react-i18next";

function SelectMovie({movies, selectedMovie, onSelect, error}: SelectMovieProps) {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const {t} = useTranslation("newsfeed");
    const displayName = selectedMovie ? `${selectedMovie.title} - ${selectedMovie.year}` : t("choose_movie");
    const truncatedName = displayName.length > 20 ? `${displayName.slice(0, 20)}...` : displayName;

    return <div className='relative'>
        <div onClick={() => setIsSelectOpen((prev) => !prev)}
             className='cursor-pointer bg-black flex px-4 py-6 items-center justify-between rounded-lg'>
            <div className="flex gap-4 items-center min-w-0">
                <FilmIcon/>
                <span className="text-white text-2xl max-lg:text-base font-normal min-w-0 break-words">
                    {truncatedName}
                </span>
            </div>
            <div className={cn("transition-transform duration-200", {'rotate-180': isSelectOpen})}>
                <SelectIcon/>
            </div>
        </div>
        {error && <div className="text-[#DC3545] h-2 mt-1 block text-xl">{error}</div>}
        {isSelectOpen && (
            <div className="absolute top-full left-0 mt-2 bg-black w-full rounded-lg">
                {movies.data.map((m: movie) => {
                    const isActive = m.id === selectedMovie?.id;

                    return (
                        <div key={m.id}
                             onClick={() => {
                                 onSelect(m);
                                 setIsSelectOpen(false);
                             }}
                             className={cn(
                                 "flex p-5 items-center gap-4 cursor-pointer hover:bg-gray-800 rounded-lg border border-transparent",
                                 {"border-main-red": isActive}
                             )}>
                            <img src={m.image} className="w-15 h-15 rounded object-cover shrink-0" alt="film"/>
                            <span
                                className={cn("text-2xl text-white min-w-0 break-words flex-1", {"text-main-red": isActive})}>{m.title}-{m.year}</span>
                            {isActive && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     className="shrink-0">
                                    <path d="M20 6L9 17l-5-5" stroke="#E31221" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </div>
                    );
                })}
            </div>
        )}
    </div>
}

export default SelectMovie;