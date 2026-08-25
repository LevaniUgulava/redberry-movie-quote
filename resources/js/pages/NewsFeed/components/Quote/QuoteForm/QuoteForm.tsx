import {Form, usePage} from "@inertiajs/react";
import Input from "@/pages/Movies/components/MovieForm/components/Input.tsx";
import {PageProps} from "@/types/PagePropsTypes.ts";
import ImageInput from "@/pages/Movies/components/MovieForm/components/ImageInput/ImageInput.tsx";
import FilmIcon from "@/components/ui/icons/Quote/FilmIcon.tsx";
import SelectIcon from "@/components/ui/icons/Quote/SelectIcon.tsx";
import {useState} from "react";
import {cn} from "@/lib/utils.ts";
import {movie} from "@/pages/Movies/MoviesTypes.ts";
import {store} from "@/actions/App/Http/Controllers/QuoteController";

function QuoteForm() {

    const {auth, movies} = usePage<PageProps<{ movies: { data: movie[] } }>>().props
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<movie | null>(null);
    return <div className="px-5 flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
            <img className="h-15 w-15 rounded-full" alt="profile_imgae" src={auth.avatar}/>
            <span className="text-white text-xl leading-[150%]">{auth.username}</span>
        </div>

        <Form
            action={store()}
            method='post'
            className="gap-6 flex flex-col">
            {({errors}) => (
                <>
                    <Input error={errors.en_quote} name="en_quote" placeholder="Start create new quote" lang="Eng"
                           multiline/>
                    <Input error={errors.ka_quote} name="ka_quote" placeholder="ახალი ციტატა" lang="ქარ" multiline/>
                    <ImageInput error={errors.image} name='image'/>
                    <div className='relative'>
                        <div onClick={() => setIsSelectOpen((prev) => !prev)}
                             className='cursor-pointer bg-black flex px-4 py-6 items-center justify-between rounded-lg'>
                            <div className="flex gap-4 items-center">
                                <FilmIcon/>
                                <span className="text-white text-2xl font-normal">
                            {selectedMovie ? `${selectedMovie.title} - ${selectedMovie.year}` : "Choose movie"}
                        </span>
                            </div>

                            <div className={cn("transition-transform duration-200", {
                                'rotate-180': isSelectOpen
                            })}>
                                <SelectIcon/>
                            </div>
                        </div>
                        {errors.movie_id && <div className="text-[#DC3545] h-2  mt-1 block text-xl">
                            {errors.movie_id}
                        </div>}
                        {isSelectOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-black w-full z-100 rounded-lg">
                                {movies.data.map((m: movie) => (
                                    <div key={m.id}
                                         onClick={() => {
                                             setSelectedMovie(m);
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

                    <input type="hidden" name="movie_id" value={selectedMovie?.id ?? ''}/>

                    <button
                        type="submit"
                        className="bg-main-red rounded-[4.8px] text-white text-xl font-normal leading-[150%] my-5 py-2.25 px-4.25">
                        Post
                    </button>
                </>
            )}
        </Form>
    </div>
}

export default QuoteForm;
