import {Form, usePage} from "@inertiajs/react";
import Input from "@/pages/Movies/components/MovieForm/components/Input.tsx";
import {useState} from "react";
import TagsInput from "./components/TagsInput/TagsInput.tsx";
import ImageInput from "./components/ImageInput/ImageInput.tsx";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {store, update} from "@/actions/App/Http/Controllers/MovieController.ts";

function MovieForm({editingMovie, isEditOpen}: { editingMovie: any, isEditOpen: boolean }) {
    const [genres, setGenres] = useState<string[]>(isEditOpen ? editingMovie.genres : []);
    const [image, setImage] = useState<File | null>(isEditOpen ? editingMovie.image : null);
    const {auth} = usePage<PageProps>().props
    return <div className="px-5 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center gap-2.5">
            <img className="h-15 w-15 rounded-full" alt="profile_imgae" src={auth.avatar}/>
            <span className="text-white text-xl leading-[150%]">{auth.username}</span>
        </div>

        <Form action={isEditOpen && editingMovie ? update({movie: editingMovie.id}) : store()}
              className="gap-6 flex flex-col">
            <Input name="en_title" placeholder="Movie name" lang="Eng" defaultValue={editingMovie?.en_title}/>
            <Input name="ka_title" placeholder="ფილმის სახელი" lang="ქარ" defaultValue={editingMovie?.ka_title}/>
            <TagsInput name="genres" placeholder="Genres" value={genres} onChange={setGenres}/>
            <Input name="year" placeholder="წელი/year" defaultValue={editingMovie?.year}/>
            <Input name="en_director" placeholder="Director" lang="Eng" defaultValue={editingMovie?.ka_director}/>
            <Input name="ka_director" placeholder="რეჟისორი" lang="ქარ" defaultValue={editingMovie?.en_director}/>
            <Input name="en_description" placeholder="movie description" lang="Eng" multiline
                   defaultValue={editingMovie?.en_description}/>
            <Input name="ka_description" placeholder="ფილმის აღწერა" lang="ქარ" multiline
                   defaultValue={editingMovie?.ka_description}/>
            <ImageInput name="image" onChange={setImage} initialPreview={editingMovie?.image ?? null}/>

            <button
                className="bg-main-red rounded-[4.8px] text-white text-xl font-normal leading-[150%] my-5 py-2.25 px-4.25">
                {isEditOpen ? "Edit" : "Add"} movie
            </button>
        </Form>
    </div>
}

export default MovieForm;
