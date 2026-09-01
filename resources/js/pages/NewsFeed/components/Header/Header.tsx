import AddQuoteIcon from "@/components/ui/NewsFeed/AddQuoteIcon.tsx";
import SearchIcon from "@/components/ui/NewsFeed/SearchIcon.tsx";
import {cn} from "@/lib/utils.ts";
import useHeader from "@/pages/NewsFeed/components/Header/hooks/useHeader.ts";
import QuoteModal from "@/pages/NewsFeed/components/Quote/QuoteModal/QuoteModal.tsx";
import {Link} from "@inertiajs/react";
import LocaleLink from "@/components/LocaleLink.tsx";
import {useTranslation} from "react-i18next";

function Header() {
    const {value, isHovered, isOpen, setIsHovered, setValue, setIsOpen, handleClose, openModal} = useHeader();
    const {t} = useTranslation("newsfeed");


    return (
        <div className="flex gap-5 overflow-hidden min-w-0 w-full">
            <LocaleLink href="/newsfeed?modal=create" className={cn(
                "bg-[#24222F] max-lg:bg-transparent h-13 shrink-0 rounded-xl flex items-center px-4 max-lg:px-8.75 gap-4",
                !isOpen && "w-full max-w-190"
            )}>
                <AddQuoteIcon/>
                <span className="text-white text-xl font-normal whitespace-nowrap cursor-pointer">{t("write_new_quote")}</span>
            </LocaleLink>
            <QuoteModal isOpen={openModal} handleClose={handleClose}/>


            <div
                onClick={() => !isOpen && setIsOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn("flex min-w-0 max-lg:hidden items-center gap-4 h-13 flex-1 cursor-pointer", {
                    'border-b border-[#EFEFEF]/30': isOpen,
                })}
            >
                <SearchIcon classname={cn("text-white", {
                    'text-[#6C757D] ': isHovered

                })}/>
                {!isOpen ? (
                    <span className={cn("text-white text-xl font-normal", {
                        'text-[#6C757D] ': isHovered
                    })}>{t("search_by")}</span>
                ) : (
                    <div className="relative w-full min-w-0">
                        <input
                            className="text-white w-full min-w-0 bg-transparent focus:outline-none border-none"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={() => !value && setIsOpen(false)}
                            autoFocus
                        />
                        {!value && (
                            <div
                                className="absolute inset-0 flex items-center pointer-events-none text-[#6C757D] text-xl whitespace-nowrap overflow-hidden">
                                {t("search_hint")}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
