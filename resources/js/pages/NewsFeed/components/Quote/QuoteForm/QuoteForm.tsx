import {Form, usePage} from "@inertiajs/react";
import Input from "@/pages/Movies/components/MovieForm/components/Input.tsx";
import {PageProps} from "@/types/PagePropsTypes.ts";
import ImageInput from "@/pages/Movies/components/MovieForm/components/ImageInput/ImageInput.tsx";
import {useState} from "react";
import {movie, MovieWithDetails} from "@/pages/Movies/MoviesTypes.ts";
import {store} from "@/actions/App/Http/Controllers/QuoteController";
import ActiveMovie from "@/pages/NewsFeed/components/Quote/QuoteForm/components/ActiveMovie.tsx";
import SelectMovie from "@/pages/NewsFeed/components/Quote/QuoteForm/components/SelectMovie.tsx";
import {useTranslation} from "react-i18next";

function QuoteForm({handleClose}: { handleClose: VoidFunction }) {

    const {auth, movies, movie} = usePage<PageProps<{ movies: { data: movie[] }, movie: MovieWithDetails }>>().props
    const {t} = useTranslation("newsfeed");
    const [selectedMovie, setSelectedMovie] = useState<movie | null>(movie);

    return <div className="px-5 flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
            <img className="h-15 w-15 max-lg:w-10 max-lg:h-10 rounded-full" alt="profile_imgae" src={auth.avatar}/>
            <span className="text-white text-xl leading-[150%]">{auth.username}</span>
        </div>

        <Form
            action={store()}
            onSuccess={handleClose}
            method='post'
            className="gap-6 flex flex-col">
            {({errors}) => (
                <>
                    {movie && <ActiveMovie movie={movie}/>}
                    <Input error={errors.en_quote} name="en_quote" placeholder="Start create new quote" lang="Eng"
                           multiline/>
                    <Input error={errors.ka_quote} name="ka_quote" placeholder="ახალი ციტატა" lang="ქარ" multiline/>
                    <ImageInput error={errors.image} name='image'/>
                    {movies &&
                        <SelectMovie
                            movies={movies}
                            selectedMovie={selectedMovie}
                            onSelect={setSelectedMovie}
                            error={errors.movie_id}
                        />}
                    <input type="hidden" name="movie_id" value={selectedMovie?.id ?? ''}/>

                    <button
                        type="submit"
                        className="bg-main-red rounded-[4.8px] text-white text-xl font-normal leading-[150%] my-5 py-2.25 px-4.25">
                        {t("post")}
                    </button>
                </>
            )}
        </Form>
    </div>
}

export default QuoteForm;
