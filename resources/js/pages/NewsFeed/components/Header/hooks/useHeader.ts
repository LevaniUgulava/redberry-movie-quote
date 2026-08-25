import {useState} from "react";
import {router, usePage} from "@inertiajs/react";

function useHeader() {
    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const {currentModal, locale} = usePage().props;

    const openModal = currentModal === "create";

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

    return {value, isHovered, isOpen, setIsHovered, setIsOpen, setValue, openModal, handleClose}

}

export default useHeader;
