import EditIcon from "@/components/ui/icons/Movie/EditIcon.tsx";
import DeleteIcon from "@/components/ui/icons/Movie/DeleteIcon.tsx";
import QuoteCard from "@/pages/Movie/components/QuoteCard/QuoteCard.tsx";
import LocaleLink from "@/components/LocaleLink.tsx";
import AddIcon from "@/components/ui/icons/Movie/AddIcon.tsx";
import {router, usePage} from "@inertiajs/react";
import {destroy} from "@/actions/App/Http/Controllers/MovieController.ts";
import QuoteModal from "@/pages/NewsFeed/components/Quote/QuoteModal/QuoteModal.tsx";
import {QuoteProps} from "@/pages/NewsFeed/components/QuoteCard/QuoteCardTypes.ts";
function Movie() {
    const {movie,currentModal,locale} = usePage<{ movie: any }>().props
    const handleDelete = ()=>{
        if (confirm('Do you want to delete?')) {
            router.delete(destroy({movie: movie}).url);
        }
    }
    const openModal = currentModal === "create";

    const handleClose = () => {
        router.get(
            `/${locale}/movies/${movie.id}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    };

    return <div>
        <div className='text-white text-2xl font-medium'>Movie description</div>
        <div className="flex gap-6 mt-8">
            <div className='w-full max-w-202.25 flex flex-col gap-5'>
                <img className="w-full rounded-xl" src={movie.image} alt='movie-image'/>
                <div className='flex flex-col gap-10'>
                    <div className='flex items-center gap-3'>
                        <span className="text-2xl text-white">Quotes (Total {movie.quotes.length})</span>
                        <div className='w-px h-8 bg-[#6C757D]'/>
                        <LocaleLink
                            href={`/movies/${movie.id}?modal=create`}
                            className='flex gap-2.5 items-center px-4.25 py-2.25 bg-main-red rounded-sm'
                        >
                            <AddIcon/>
                            <span className="text-white text-xl leading-[150%] font-normal">Add quote</span>
                        </LocaleLink>
                    </div>
                    <div className="flex flex-col gap-5">
                        {movie.quotes.map((quote: QuoteProps, index: number) => (
                            <QuoteCard key={index} quote={quote}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-5">
                <div className="flex justify-between">
                    <div>
                        <span
                            className='text-main-beige text-2xl leading-[150%] font-medium'>{movie.title}({movie.year})</span>
                    </div>
                    <div className="flex items-center gap-4 bg-[#24222F] rounded-xl px-4 py-3 w-fit">
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
                <div className='flex gap-3'>
                    {movie.genres.map((genre: any) => (
                        <div className="px-[11.7px] py-[6.3px] rounded-lg bg-[#6C757D]">
                            <span className="text-white font-bold text-lg leading-[100%]">{genre}</span>
                        </div>
                    ))}
                </div>
                <div className='flex gap-3'>
                    <span className="text-[#CED4DA] text-lg font-bold leading-[150%]">Director:</span>
                    <span className='text-white text-lg font-medium font-lg leading-[150%]'>{movie.director}</span>
                </div>
                <div>
                    <span className='text-lg leading-[150%] font-regular text-[#CED4DA]'>{movie.description}</span>
                </div>
            </div>
            <QuoteModal isOpen={openModal} handleClose={handleClose}/>

        </div>
    </div>
}

export default Movie;
