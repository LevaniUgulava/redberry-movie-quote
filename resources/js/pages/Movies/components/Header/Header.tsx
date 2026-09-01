import SearchIcon from "@/components/ui/NewsFeed/SearchIcon.tsx";
import AddIcon from "@/components/ui/icons/Movie/AddIcon.tsx";
import LocaleLink from "@/components/LocaleLink.tsx";
import useIsMobile from "@/hooks/useIsMobile.ts";

function Header() {
    const isMoble = useIsMobile();
    return <div className="flex justify-between">
        <div className="flex  gap-1 max-lg:flex-col">
            <span className="text-2xl text-white font-mediumleading-[150%]">My list of movies</span>
            <span className="text-2xl max-lg:text-base text-white font-mediumleading-[150%]">(Total 25)</span>
        </div>
        <div className="flex items-center gap-5">{ !isMoble &&
            <div className="flex items-center gap-2.5">
                <SearchIcon classname="text-[#CED4DA]"/>
                <span className="text-[#CED4DA] text-xl font-normal leading-[150%]">Search</span>
            </div>}
            <LocaleLink href="/movies?modal=create" className='flex gap-2.5 items-center px-4.25 py-2.25 bg-main-red rounded-sm'>
                <AddIcon/>
                <span className="text-white text-xl max-lg:text-base leading-[150%] font-normal">Add movie</span>
            </LocaleLink>
        </div>
    </div>
}

export default Header;
