import {FormEvent, MouseEvent, useState} from "react";
import {router} from "@inertiajs/react";
import {index} from "@/actions/App/Http/Controllers/MovieController.ts";
import {useTranslation} from "react-i18next";
import useIsMobile from "@/hooks/useIsMobile.ts";

function useHeader() {
    const {t} = useTranslation(["movies", "common"]);
    const isMoble = useIsMobile();
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const submitSearch = (term: string) => {
        router.get(index.url(), {
            filter: {search: term},
        }, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        });
    };

    const handleSubmit = (e: FormEvent | MouseEvent) => {
        e.preventDefault();
        const term = search.trim();

        if (!isOpen) {
            setIsOpen(true);

            return;
        }

        if (!term) {
            setIsOpen(false);

            return;
        }

        submitSearch(term);
        setSearch("");
        setIsOpen(false);
    };

    return {isOpen, search, setIsOpen, setSearch, handleSubmit, isMoble, t};
}

export default useHeader;
