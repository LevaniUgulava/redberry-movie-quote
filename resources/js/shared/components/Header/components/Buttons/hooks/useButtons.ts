import {usePage} from "@inertiajs/react";
import {useTranslation} from "react-i18next";
import {useState} from "react";

function useButtons() {
    const {auth} = usePage().props
    const isAuth = auth !== null;
    const {t} = useTranslation("header");
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenAndClose = () => {
        setIsOpen(prev => !prev)
    }

    return {t, isOpen, handleOpenAndClose, isAuth}
}

export default useButtons;
