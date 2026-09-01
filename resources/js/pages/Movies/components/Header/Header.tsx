import SearchIcon from "@/components/ui/NewsFeed/SearchIcon.tsx";
import AddIcon from "@/components/ui/icons/Movie/AddIcon.tsx";
import LocaleLink from "@/components/LocaleLink.tsx";
import {useTranslation} from "react-i18next";

function Header() {
    const {t} = useTranslation(["movies", "common"]);
    return <div className="flex justify-between">
        <div className="flex items-center">
            <span className="text-2xl text-white font-mediumleading-[150%]">{t("list_title", {count: 25})}</span>
        </div>
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-2.5">
                <SearchIcon classname="text-[#CED4DA]"/>
                <span className="text-[#CED4DA] text-xl font-normal leading-[150%]">{t("search")}</span>
            </div>
            <LocaleLink href="/movies?modal=create" className='flex gap-2.5 items-center px-4.25 py-2.25 bg-main-red rounded-sm'>
                <AddIcon/>
                <span className="text-white text-xl leading-[150%] font-normal">{t("add_movie")}</span>
            </LocaleLink>
        </div>
    </div>
}

export default Header;
