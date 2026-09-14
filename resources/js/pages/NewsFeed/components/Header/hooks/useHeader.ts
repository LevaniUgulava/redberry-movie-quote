import {FormEvent, useEffect, useState} from "react";
import {router, usePage} from "@inertiajs/react";
import {index} from "@/actions/App/Http/Controllers/QuoteController.ts";

function useHeader() {
    const {currentModal, locale, filter} = usePage().props as {
        currentModal?: string;
        locale: string;
        filter?: { search?: string };
    };
    const [value, setValue] = useState(filter?.search ?? "");
    const [isOpen, setIsOpen] = useState(!!filter?.search);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (filter?.search) {
            setValue(filter.search);
        }
    }, [filter?.search]);

    const openModal = currentModal === "create";

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        const term = value.trim();
        if (!term) return;
        router.get(index.url(), {
            filter: {search: term},
        }, {
            preserveScroll: true,
            replace: true,
        });
    };

    const handleClose = () => {
        router.get(
            `/${locale}/newsfeed`,
            {},
            {
                replace: true,
            },
        );
    };

    return {value, isHovered, isOpen, setIsHovered, setIsOpen, setValue, handleSearch, openModal, handleClose}

}

export default useHeader;
