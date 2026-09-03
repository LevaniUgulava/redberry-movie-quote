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

    return <div className='relative'>
        <div onClick={() => setIsSelectOpen((prev) => !prev)}
             className='cursor-pointer bg-black flex px-4 py-6 items-center justify-between rounded-lg'>
            <div className="flex gap-4 items-center">
                <FilmIcon/>
                <span className="text-white text-2xl max-lg:text-base font-normal">
                    {selectedMovie ? `${selectedMovie.title} - ${selectedMovie.year}` : t("choose_movie")}
                </span>
            </div>
            <div className={cn("transition-transform duration-200", {'rotate-180': isSelectOpen})}>
                <SelectIcon/>
            </div>
        </div>
        {error && <div className="text-[#DC3545] h-2 mt-1 block text-xl">{error}</div>}
        {isSelectOpen && (
            <div className="absolute top-full left-0 mt-2 bg-black w-full z-100 rounded-lg">
                {movies.data.map((m: movie) => (
                    <div key={m.id}
                         onClick={() => {
                             onSelect(m);
                             setIsSelectOpen(false);
                         }}
                         className="flex p-5 items-center gap-4 cursor-pointer hover:bg-gray-800 rounded-lg">
                        <img src={m.image} className="w-15 h-15 rounded object-cover" alt="film"/>
                        <span className="text-2xl text-white">{m.title}-{m.year}</span>
                    </div>
                ))}
            </div>
        )}
    </div>
}

export default SelectMovie;
