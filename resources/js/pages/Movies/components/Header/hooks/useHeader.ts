import {FormEvent, MouseEvent, useEffect, useState} from "react";
import {router, usePage} from "@inertiajs/react";
import {index} from "@/actions/App/Http/Controllers/MovieController.ts";
import {useTranslation} from "react-i18next";
import useIsMobile from "@/hooks/useIsMobile.ts";

function useHeader() {
    const {t} = useTranslation(["movies", "common"]);
    const isMoble = useIsMobile();
    const {locale, filter} = usePage<{ filter: { search: string } }>().props;
    const [isOpen, setIsOpen] = useState(!!filter?.search);
    const [search, setSearch] = useState(filter?.search ?? "");

    useEffect(() => {
        if (filter?.search) {
            setSearch(filter.search);
        }
    }, [filter?.search]);

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

        if (term) {
            submitSearch(term);
        }
    };

    const handleClose = () => {
        router.get(
            `/${locale}/movies`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
            },
        );
    };

    const clearSearch = () => {
        setSearch("");
        handleClose();
    };

    return {isOpen, search, setIsOpen, setSearch, handleSubmit, clearSearch, isMoble, t};
}

export default useHeader;
