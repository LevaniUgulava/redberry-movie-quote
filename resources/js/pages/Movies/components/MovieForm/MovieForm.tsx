import {Form, usePage} from "@inertiajs/react";
import Input from "@/pages/Movies/components/MovieForm/components/Input.tsx";
import {useState} from "react";
import TagsInput from "./components/TagsInput/TagsInput.tsx";
import ImageInput from "./components/ImageInput/ImageInput.tsx";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {store} from "@/actions/App/Http/Controllers/MovieController.ts";

function MovieForm() {
    const [genres, setGenres] = useState<string[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const {auth} = usePage<PageProps>().props
    return <div className="px-5 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center gap-2.5">
            <img className="h-15 w-15 rounded-full" alt="profile_imgae" src={auth.avatar}/>
            <span className="text-white text-xl leading-[150%]">{auth.username}</span>
        </div>

        <Form action={store()} className="gap-6 flex flex-col">
            <Input name="en_title" placeholder="Movie name" lang="Eng"/>
            <Input name="ka_title" placeholder="ფილმის სახელი" lang="ქარ"/>
            <TagsInput name="genres" placeholder="Genres" value={genres} onChange={setGenres}/>
            <Input name="year" placeholder="წელი/year"/>
            <Input name="en_director" placeholder="Director" lang="Eng"/>
            <Input name="ka_director" placeholder="რეჟისორი" lang="ქარ"/>
            <Input name="en_description" placeholder="movie description" lang="Eng" multiline/>
            <Input name="ka_description" placeholder="ფილმის აღწერა" lang="ქარ" multiline/>
            <ImageInput name="image" onChange={setImage}/>

            <button
                className="bg-main-red rounded-[4.8px] text-white text-xl font-normal leading-[150%] my-5 py-2.25 px-4.25">
                Add movie
            </button>
        </Form>
    </div>
}

export default MovieForm;
