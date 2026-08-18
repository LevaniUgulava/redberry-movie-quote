import {router, usePage} from "@inertiajs/react";
import {MODALS} from "@/constants/Modal.ts";

function useAuthContent(currentModal: string) {
    const {flash, props} = usePage();
    const handleClose = () => {
        router.get(
            `/${props.locale}`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
            },
        );
    };

    const isOpen =
        MODALS.includes(currentModal) ||
        Boolean(flash?.type);
    return {handleClose, isOpen: Boolean(isOpen), type: flash?.type}
}

export default useAuthContent;
