import {router, usePage} from "@inertiajs/react";
import {MODALS} from "@/constants/Modal.ts";
import {getMessageConfig} from "@/constants/Message.tsx";

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
    const MESSAGE_CONFIG = getMessageConfig(props.locale as string);

    const currentConfig = MESSAGE_CONFIG[flash?.type as keyof typeof MESSAGE_CONFIG];

    return {handleClose, isOpen:Boolean(isOpen), currentConfig}
}

export default useAuthContent;
