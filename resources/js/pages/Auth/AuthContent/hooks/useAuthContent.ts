import {router, usePage} from "@inertiajs/react";
import {useTranslation} from "react-i18next";
import {MODALS} from "@/constants/Modal.ts";
import {getMessageConfig} from "@/constants/Message.tsx";

function useAuthContent(currentModal: string) {
    const {flash, props} = usePage();
    const {t} = useTranslation("auth");
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

    const messageConfig = MESSAGE_CONFIG[flash?.type as keyof typeof MESSAGE_CONFIG];

    const currentConfig = messageConfig && {
        ...messageConfig,
        title: t(messageConfig.title),
        subtitle: t(messageConfig.subtitle),
        button: t(messageConfig.button),
    };

    return {handleClose, isOpen:Boolean(isOpen), currentConfig}
}

export default useAuthContent;
