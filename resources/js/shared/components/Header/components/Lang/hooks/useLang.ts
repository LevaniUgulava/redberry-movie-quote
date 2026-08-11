import { useState } from "react";

function useLang() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("Eng");
    return { isOpen, setIsOpen, selectedLang, setSelectedLang };
}
export default useLang;
