import {useState} from "react";
import {router, usePage} from "@inertiajs/react";
import {LANGUAGE} from "@/constants/Lang.ts";

function useLang() {
    const {locale} = usePage().props

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(
        LANGUAGE.find((lang) => lang.value === locale)?.label
    );
    const setLanguage = (lang: { label: string, value: string }) => {

        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(`/${locale}`, `/${lang.value}`);
        setSelectedLang(lang.label);
        setIsOpen(false);
        router.visit(newPath);
    }
    return {isOpen, setIsOpen, selectedLang, setLanguage};
}

export default useLang;
