import {FormEvent, useRef} from "react";
import {router} from "@inertiajs/react";

function useSearchModal(onClose: VoidFunction) {
    const searchRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const search = searchRef.current?.value.trim();

        if (!search) return;
        onClose()
        router.get(window.location.pathname, {
            filter: {
                search,
            },
        }, {
            preserveState: true,
            replace: true,
            preserveScroll: true,
        })

    };
    return {handleSubmit, searchRef}
}

export default useSearchModal;
