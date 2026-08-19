import {Link, usePage} from "@inertiajs/react";
import NewsFeedIcon from "@/components/ui/icons/Sidebar/NewsFeedIcon.tsx";
import ListOfMovieIcon from "@/components/ui/icons/Sidebar/ListOfMovieIcon.tsx";
import {PageProps} from "@/types/PagePropsTypes.ts";

function Sidebar() {
    const {auth}= usePage<PageProps>().props
    return <div className="flex flex-col gap-10 pt-10">
        <Link className="flex gap-6 items-center">
            <img alt="profile imsage" className="h-15 w-15 rounded-full object-cover border-2 border-main-red"
                 src={auth?.avatar}/>
            <div className="flex flex-col">
                <span className="text-2xl leading-[150%] font-normal text-white">{auth?.username}</span>
                <span className="text-base text-[#CED4DA] font-normal">Edit your profile</span>
            </div>
        </Link>
        <Link className="flex items-center gap-10.5"><NewsFeedIcon/>
            <span className="text-white text-2xl">News feed</span>
        </Link>
        <Link className="flex items-center gap-10.5"><ListOfMovieIcon/>
            <span className="text-white text-2xl">List of movies</span>
        </Link>

    </div>
}

export default Sidebar;
