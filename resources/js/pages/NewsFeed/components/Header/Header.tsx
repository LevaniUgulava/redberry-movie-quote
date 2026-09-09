import {useEffect, useRef} from "react";
import AddQuoteIcon from "@/components/ui/NewsFeed/AddQuoteIcon.tsx";
import SearchIcon from "@/components/ui/NewsFeed/SearchIcon.tsx";
import {cn} from "@/lib/utils.ts";
import useHeader from "@/pages/NewsFeed/components/Header/hooks/useHeader.ts";
import QuoteModal from "@/pages/NewsFeed/components/Quote/QuoteModal/QuoteModal.tsx";
import LocaleLink from "@/components/LocaleLink.tsx";
import {useTranslation} from "react-i18next";

function Header() {

const {value, isHovered, isOpen, setIsHovered, setValue, setIsOpen, handleSearch, handleClose, openModal} = useHeader();
const {t} = useTranslation("newsfeed");
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
    if (isOpen) {
        inputRef.current?.focus();
    }
}, [isOpen]);


    return (
        <div className={cn(
            "grid gap-5 overflow-hidden min-w-0 w-full transition-[grid-template-columns] duration-200",
            isOpen
                ? "grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
                : "grid-cols-[minmax(0,47.5rem)_minmax(0,1fr)]"
        )}>
            <LocaleLink href="/newsfeed?modal=create" className={cn(
                "bg-[#24222F] max-lg:bg-transparent h-13 shrink-0 rounded-xl flex items-center px-4 max-lg:px-8.75 gap-4 w-full min-w-0",
            )}>
                <AddQuoteIcon/>
                <span className="text-white text-xl font-normal whitespace-nowrap truncate cursor-pointer">{t("write_new_quote")}</span>
            </LocaleLink>
            <QuoteModal isOpen={openModal} handleClose={handleClose} modal="create" />


            <form
                onSubmit={handleSearch}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn("flex min-w-0 max-lg:hidden items-center gap-4 h-13 cursor-pointer", {
                    'border-b border-[#EFEFEF]/30': isOpen,
                })}
            >
                <button type="submit" className="cursor-pointer">
                    <SearchIcon classname={cn("text-white", {
                        'text-[#6C757D] ': isHovered

                    })}/>
                </button>
                <div className="relative w-full min-w-0 h-13">
                    <span
                        onClick={() => !isOpen && setIsOpen(true)}
                        className={cn(
                            "absolute inset-0 flex items-center text-xl font-normal whitespace-nowrap transition-opacity duration-300 cursor-pointer",
                            isHovered ? "text-[#6C757D]" : "text-white",
                            isOpen && "opacity-0 pointer-events-none"
                        )}
                    >
                        {t("search_by")}
                    </span>
                    <input
                        ref={inputRef}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={() => !value && setIsOpen(false)}
                        className={cn(
                            "text-white w-full min-w-0 bg-transparent focus:outline-none border-none h-full transition-opacity duration-300",
                            !isOpen && "opacity-0 pointer-events-none"
                        )}
                    />
                    {!value && (
                        <div
                            className={cn(
                                "absolute inset-0 flex items-center pointer-events-none text-[#6C757D] text-xl whitespace-nowrap overflow-hidden transition-opacity duration-300",
                                !isOpen && "opacity-0"
                            )}
                        >
                            {t("search_hint")}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Header;
