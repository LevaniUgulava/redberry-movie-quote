import EditIcon from "@/components/ui/icons/Movie/EditIcon.tsx";
import DeleteIcon from "@/components/ui/icons/Movie/DeleteIcon.tsx";
import QuoteCard from "@/pages/Movie/components/QuoteCard/QuoteCard.tsx";
import LocaleLink from "@/components/LocaleLink.tsx";
import AddIcon from "@/components/ui/icons/Movie/AddIcon.tsx";
import QuoteModal from "@/pages/NewsFeed/components/Quote/QuoteModal/QuoteModal.tsx";
import {QuoteCardData} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
import useMovie from "@/pages/Movie/hooks/useMovie.ts";
import {useTranslation} from "react-i18next";
import useIsMobile from "@/hooks/useIsMobile.ts";
import {Head} from "@inertiajs/react";

function Movie() {
    const {handleClose, handleDelete, movie, openModal, currentModal, quote} = useMovie();
    const {t} = useTranslation(["movies", "common"]);
    const isMobile = useIsMobile();

    return <div className="max-lg:px-8.75 mt-10 w-full min-w-0">
        <Head title={movie.title}/>
        <div className='text-white text-2xl font-medium'>{t("movie_description")}</div>
        <div className="flex gap-6 mt-8 max-lg:flex-col">
            <div className='w-full min-w-0 max-w-202.25 flex flex-col gap-5'>
                <img className="w-full max-w-full rounded-xl object-cover" src={movie.image} alt='movie-image'/>
                {!isMobile && <div className='flex flex-col gap-10 min-w-0'>
                    <div className='flex items-center gap-3'>
                        <span className="text-2xl text-white">{t("quotes_total", {count: movie.quotes.length})}</span>
                        <div className='w-px h-8 bg-[#6C757D]'/>
                        <LocaleLink
                            href={`/movies/${movie.id}?modal=create`}
                            className='flex gap-2.5 items-center px-4.25 py-2.25 bg-main-red hover:bg-[#CC0E10] rounded-sm transition-colors'
                        >
                            <AddIcon/>
                            <span className="text-white text-xl leading-[150%] font-normal">{t("add_quote")}</span>
                        </LocaleLink>
                    </div>
                    <div className="flex flex-col gap-5 min-w-0">
                        {movie.quotes.length === 0 ? (
                            <div className="flex flex-col items-center gap-4 py-16">
                                <span className="text-white text-2xl font-bold">{t("no_quotes_yet")}</span>
                                <span className="text-[#CED4DA] text-lg">{t("no_quotes_hint")}</span>
                            </div>
                        ) : movie.quotes.map((quote: QuoteCardData) => (
                            <QuoteCard key={quote.id} movie_id={movie.id} quote={quote}/>
                        ))}
                    </div>
                </div>}
            </div>
            <div className="w-full min-w-0 flex flex-col gap-5">
                <div className="flex justify-between gap-5">
                    <div className="min-w-0">
                        <span
                            className='text-main-beige text-2xl leading-[150%] font-medium break-all'>{movie.title}({movie.year})</span>
                    </div>
                    <div className="flex items-center gap-4 bg-[#24222F] rounded-xl px-4 py-3 w-fit h-fit shrink-0">
                        <LocaleLink href={`/movies?id=${movie.id}&modal=edit`}
                                    className="cursor-pointer">
                            <EditIcon/>
                        </LocaleLink>
                        <div className="w-px h-5 bg-white/20"/>
                        <button onClick={handleDelete} className="cursor-pointer">
                            <DeleteIcon/>
                        </button>
                    </div>
                </div>
                <div className='flex flex-wrap gap-3'>
                    {movie.genres.map((genre: any) => (
                        <div key={genre}
                             className="px-[11.7px] py-[6.3px] rounded-lg bg-[#6C757D] min-w-0">
                            <span className="text-white font-bold text-lg leading-[100%] break-all">{genre}</span>
                        </div>
                    ))}
                </div>
                <div className='flex gap-3'>
                    <span className="text-[#CED4DA] text-lg font-bold leading-[150%] shrink-0">{t("director")}</span>
                    <span className='text-white text-lg font-medium leading-[150%] min-w-0 break-words [overflow-wrap:anywhere]'>{movie.director}</span>
                </div>
                <div className="min-w-0">
                    <span className='text-lg leading-[150%] font-normal text-[#CED4DA] break-words [overflow-wrap:anywhere]'>{movie.description}</span>
                </div>
                {isMobile && <div className='flex flex-col gap-10 min-w-0'>
                    <div className='flex flex-col gap-8'>
                        <LocaleLink
                            href={`/movies/${movie.id}?modal=create`}
                            className='flex gap-2.5 w-fit items-center px-4.25 py-2.25 bg-main-red hover:bg-[#CC0E10] rounded-sm transition-colors'
                        >
                            <AddIcon/>
                            <span className="text-white text-xl leading-[150%] font-normal">{t("add_quote")}</span>
                        </LocaleLink>
                        <div className='h-px w-full bg-[#6C757D]'/>
                        <span className="text-2xl text-white">{t("quotes_total", {count: movie.quotes.length})}</span>
                    </div>
                    <div className="flex flex-col gap-5 min-w-0">
                        {movie.quotes.length === 0 ? (
                            <div className="flex flex-col items-center gap-4 py-16">
                                <span className="text-white text-2xl font-bold">{t("no_quotes_yet")}</span>
                                <span className="text-[#CED4DA] text-lg">{t("no_quotes_hint")}</span>
                            </div>
                        ) : movie.quotes.map((quote: QuoteCardData) => (
                            <QuoteCard key={quote.id} movie_id={movie.id} quote={quote}/>
                        ))}
                    </div>
                </div>}
            </div>

            <QuoteModal movie_id={movie.id} isOpen={openModal} handleClose={handleClose} modal={currentModal}
                        quote={quote}/>
        </div>
    </div>
}

export default Movie;
