import {usePage} from "@inertiajs/react";
import {useTranslation} from "react-i18next";
import {useState} from "react";

function useButtons() {
    const {props,url} = usePage()
    const isSearchIconVisible=url === `/${props.locale}/newsfeed`
    const isAuth = props.auth !== null;
    const {t} = useTranslation("header");
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenAndClose = () => {
        setIsOpen(prev => !prev)
    }

    return {t, isOpen, handleOpenAndClose, isAuth,isSearchIconVisible}
}

export default useButtons;
