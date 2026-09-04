import useLang from "@/shared/components/Header/components/Lang/hooks/useLang";
import {LANGUAGE} from "@/constants/Lang";
import ArrowIcon from "@/shared/components/Header/components/Lang/icons/ArrowIcon";
import {cn} from "@/lib/utils.ts";

function Lang({isSidebar = false}: { isSidebar?: boolean }) {
    const {isOpen, setIsOpen, selectedLang, setLanguage} = useLang();

    return (
        <div className="relative inline-block">

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-between gap-2  w-24 rounded-lg px-4 py-2 text-base font-medium text-gray-700  focus:outline-none  cursor-pointer"
            >
                <span className="text-white">{selectedLang}</span>
                <ArrowIcon
                    className={`w-4 h-4 text-white transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div
                    className={cn("overflow-hidden absolute right-0  w-28 bg-[#1a1a2e] border border-white/10 rounded-xl shadow-lg  z-50", {
                        "-top-20": isSidebar
                    })}>
                    {LANGUAGE.map((lang) => (
                        <button
                            key={lang.label}
                            onClick={() => {
                                setLanguage(lang)
                            }}
                            className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                                selectedLang === lang.label
                                    ? "bg-white/10 text-[#e8d9b5]"
                                    : "text-gray-300 hover:bg-white/5"
                            }`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Lang;
