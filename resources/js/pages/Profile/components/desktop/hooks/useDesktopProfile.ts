import {useEffect, useState} from "react";

function useDesktopProfile() {
    const [open, setOpen] = useState(false);

    const handleSuccessOpen = () => {
        setOpen(true);
    }

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => setOpen(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [open]);

    return {open, setOpen, handleSuccessOpen}
}

export default useDesktopProfile;