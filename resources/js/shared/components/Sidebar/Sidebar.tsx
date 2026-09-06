import {Link, usePage} from "@inertiajs/react";
import NewsFeedIcon from "@/components/ui/icons/Sidebar/NewsFeedIcon.tsx";
import ListOfMovieIcon from "@/components/ui/icons/Sidebar/ListOfMovieIcon.tsx";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {cn} from "@/lib/utils.ts";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import Lang from "@/shared/components/Header/components/Lang/Lang.tsx";


function Sidebar() {
    const {props: {auth, locale}, url} = usePage<PageProps>()
    const [hoveredKey, setHoveredKey] = useState<string | null>(null)
    const {t} = useTranslation("layout");

    return <div>
        <div className="flex flex-col gap-10">
            <Link href={`/${locale}/profile`}
                  className="flex gap-6 max-lg:gap-5 items-center">
                <img alt="profile image"
                     className={cn("h-15 w-15 max-lg:w-10 max-lg:h-10 rounded-full object-cover hover:border border-main-red", {
                         "border-2 border-main-red": url === `/${locale}/profile`
                     })}
                     src={auth?.avatar}/>
                <div className="flex flex-col">
                    <span
                        className="text-2xl max-lg:text-xl leading-[150%] font-normal text-white">{auth?.username}</span>
                    <span
                        className="text-base max-lg:text-sm text-[#CED4DA] font-normal">{t("edit_your_profile")}</span>
                </div>
            </Link>

            <Link href={`/${locale}/newsfeed`}
                  className="flex items-center gap-10.5 max-lg:gap-7.5"
                  onMouseEnter={() => setHoveredKey('newsFeed')}
                  onMouseLeave={() => setHoveredKey(null)}>
                <NewsFeedIcon classname={cn("text-white max-lg:w-6 max-lg:h-6", {
                    "text-main-red": url.startsWith(`/${locale}/newsfeed`),
                    "text-[#6C757D]": hoveredKey === 'newsFeed'
                })}/>
                <span className={cn("text-white text-2xl max-lg:text-xl", {
                    "text-[#6C757D]": hoveredKey === 'newsFeed'
                })}>{t("news_feed")}</span>
            </Link>

            <Link href={`/${locale}/movies`}
                  className="flex items-center gap-10.5 max-lg:gap-7.5"
                  onMouseEnter={() => setHoveredKey('movies')}
                  onMouseLeave={() => setHoveredKey(null)}>
                <ListOfMovieIcon classname={cn("text-white max-lg:w-6 max-lg:h-6", {
                    "text-main-red": url.startsWith(`/${locale}/movies`),
                    "text-[#6C757D]": hoveredKey === 'movies'

                })}/>
                <span className={cn("text-white text-2xl max-lg:text-xl", {
                    "text-[#6C757D]": hoveredKey === 'movies'
                })}>{t("list_of_movies")}</span>
            </Link>
        </div>

    </div>
}

export default Sidebar;
