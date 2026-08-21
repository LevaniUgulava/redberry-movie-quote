import AddQuoteIcon from "@/components/ui/NewsFeed/AddQuoteIcon.tsx";
import SearchIcon from "@/components/ui/NewsFeed/SearchIcon.tsx";
import {cn} from "@/lib/utils.ts";
import useHeader from "@/pages/NewsFeed/components/Header/hooks/useHeader.ts";

function Header() {
    const {value, isHovered, isOpen, setIsHovered, setValue, setIsOpen} = useHeader();

    return (
        <div className="flex gap-5 overflow-hidden min-w-0 w-full">
            <div className={cn(
                "bg-[#24222F] h-13 shrink-0 rounded-xl flex items-center px-4 gap-4",
                !isOpen && "w-full max-w-190"
            )}>
                <AddQuoteIcon/>
                <span className="text-white text-xl font-normal whitespace-nowrap cursor-pointer">Write new quote</span>
            </div>

            <div
                onClick={() => !isOpen && setIsOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn("flex min-w-0 items-center gap-4 h-13 flex-1 cursor-pointer", {
                    'border-b border-[#EFEFEF]/30': isOpen,
                })}
            >
                <SearchIcon classname={cn("text-white", {
                    'text-[#6C757D] ': isHovered

                })}/>
                {!isOpen ? (
                    <span className={cn("text-white text-xl font-normal", {
                        'text-[#6C757D] ': isHovered
                    })}>Search by</span>
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
                                Enter <span className="text-white mx-1">@</span> to search movies, Enter <span
                                className="text-white mx-1">#</span> to search quotes
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
