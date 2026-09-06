import {FormEvent, useState} from "react";
import {router, usePage} from "@inertiajs/react";
import {index} from "@/actions/App/Http/Controllers/QuoteController.ts";

function useHeader() {
    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const {currentModal, locale} = usePage().props;

    const openModal = currentModal === "create";

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        const term = value.trim();
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

    const handleClose = () => {
        router.get(
            `/${locale}/newsfeed`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    };

    return {value, isHovered, isOpen, setIsHovered, setIsOpen, setValue, handleSearch, openModal, handleClose}

}

export default useHeader;
