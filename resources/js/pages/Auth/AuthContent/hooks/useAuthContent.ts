import {router, usePage} from "@inertiajs/react";
import {MODALS} from "@/constants/Modal.ts";

function useAuthContent(currentModal:string) {
    const handleClose = () => {
        router.get(
            "/",
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    };
    const {flash} = usePage();

    const isOpen =
        MODALS.includes(currentModal) ||
        Boolean(flash?.type);
    return {handleClose, isOpen:Boolean(isOpen), type: flash?.type}
}

export default useAuthContent;
