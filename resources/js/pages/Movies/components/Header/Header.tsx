import SearchIcon from "@/components/ui/NewsFeed/SearchIcon.tsx";
import AddIcon from "@/components/ui/icons/Movie/AddIcon.tsx";
import LocaleLink from "@/components/LocaleLink.tsx";
import useHeader from "./hooks/useHeader.ts";
import {cn} from "@/lib/utils.ts";

function Header({quantity}: { quantity: number }) {

    const {isOpen, search, setIsOpen, setSearch, handleSubmit, isMoble, t} = useHeader();

    return <div className="flex justify-between">
        <div className="flex items-center">
            <span className="text-2xl text-white font-mediumleading-[150%]">{t("list_title", {count: quantity})}</span>
        </div>
        <div className="flex items-center gap-5 transition-[grid-template-columns] duration-200">
            {!isMoble &&
                <form
                    onSubmit={handleSubmit}
                    className={cn("flex items-center gap-2.5 cursor-pointer transition-[width] duration-300 overflow-hidden", {
                        'border-b border-[#EFEFEF]/30 w-72': isOpen,
                        'w-24': !isOpen,
                    })}
                >
                    <button
                        type="button"
                        onClick={handleSubmit}
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label={t("search")}
                        className="shrink-0 cursor-pointer"
                    >
                        <SearchIcon classname="text-[#CED4DA]"/>
                    </button>
                    {!isOpen ? (
                        <>
                            <span
                                onClick={() => setIsOpen(true)}
                                className="text-[#CED4DA] text-xl font-normal leading-[150%] whitespace-nowrap"
                            >
                        {t("search")}
                    </span>
                        </>

                    ) : (
                        <input
                            autoFocus
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onBlur={() => !search && setIsOpen(false)}
                            placeholder={t("search_placeholder")}
                            className="bg-transparent border-none py-2 text-white text-xl font-normal leading-[150%] focus:outline-none placeholder:text-[#CED4DA] w-full min-w-0"
                        />
                    )}
                </form>}
            <LocaleLink href="/movies?modal=create"
                        className='flex gap-2.5 items-center px-4.25 py-2.25 bg-main-red rounded-sm'>
                <AddIcon/>
                <span className="text-white text-xl max-lg:text-base leading-[150%] font-normal">{t("add_movie")}</span>
            </LocaleLink>
        </div>
    </div>
}

export default Header;
