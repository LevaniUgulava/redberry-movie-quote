import {router, usePage} from "@inertiajs/react";
import {MODALS} from "@/constants/Modal.ts";
import {MESSAGE_CONFIG} from "@/constants/Message.tsx";

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
    const currentConfig = MESSAGE_CONFIG[flash?.type as keyof typeof MESSAGE_CONFIG];

    return {handleClose, isOpen:Boolean(isOpen), currentConfig}
}

export default useAuthContent;
