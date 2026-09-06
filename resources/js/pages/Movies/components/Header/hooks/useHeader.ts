import {FormEvent, useState} from "react";
import {router} from "@inertiajs/react";
import {index} from "@/actions/App/Http/Controllers/MovieController.ts";
import {useTranslation} from "react-i18next";
import useIsMobile from "@/hooks/useIsMobile.ts";

function useHeader() {
    const {t} = useTranslation(["movies", "common"]);
    const isMoble = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        const term = search.trim();
        if (!term) return;
        router.get(index.url(), {
            filter: {search: term},
        }, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        });
        setIsOpen(false);
    };

    return {isOpen, search, setIsOpen, setSearch, handleSearch,isMoble,t};
}

export default useHeader;
