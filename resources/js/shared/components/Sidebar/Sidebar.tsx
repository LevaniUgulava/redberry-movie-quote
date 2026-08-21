import {Link, usePage} from "@inertiajs/react";
import NewsFeedIcon from "@/components/ui/icons/Sidebar/NewsFeedIcon.tsx";
import ListOfMovieIcon from "@/components/ui/icons/Sidebar/ListOfMovieIcon.tsx";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {cn} from "@/lib/utils.ts";
import {useState} from "react";

function Sidebar() {
    const {props: {auth, locale}, url} = usePage<PageProps>()
    const [hoveredKey, setHoveredKey] = useState<string | null>(null)

    return <div className="flex flex-col gap-10 pt-10">
        <Link href={`/${locale}/profile`} className="flex gap-6 items-center">
            <img alt="profile image"
                 className={cn("h-15 w-15 rounded-full object-cover hover:border border-main-red", {
                     "border-2 border-main-red": url === `/${locale}/profile`
                 })}
                 src={auth?.avatar}/>
            <div className="flex flex-col">
                <span className="text-2xl leading-[150%] font-normal text-white">{auth?.username}</span>
                <span className="text-base text-[#CED4DA] font-normal">Edit your profile</span>
            </div>
        </Link>

        <Link href={`/${locale}/newsfeed`} className="flex items-center gap-10.5"
              onMouseEnter={() => setHoveredKey('newsFeed')}
              onMouseLeave={() => setHoveredKey(null)}>
            <NewsFeedIcon classname={cn("text-white", {
                "text-main-red": url === `/${locale}/newsfeed`,
                "text-[#6C757D]": hoveredKey === 'newsFeed'
            })}/>
            <span className={cn("text-white text-2xl", {
                "text-[#6C757D]": hoveredKey === 'newsFeed'
            })}>News feed</span>
        </Link>

        <Link href={`/${locale}/movies`} className="flex items-center gap-10.5"
              onMouseEnter={() => setHoveredKey('movies')}
              onMouseLeave={() => setHoveredKey(null)}>
            <ListOfMovieIcon classname={cn("text-white", {
                "text-main-red": url === `/${locale}/movies`,
                "text-[#6C757D]": hoveredKey === 'movies'

            })}/>
            <span className={cn("text-white text-2xl", {
                "text-[#6C757D]": hoveredKey === 'movies'
            })}>List of movies</span>
        </Link>
    </div>
}

export default Sidebar;
