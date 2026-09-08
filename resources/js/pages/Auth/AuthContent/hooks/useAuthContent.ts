import {router, usePage} from "@inertiajs/react";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
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
    const [isMessageVisible, setIsMessageVisible] = useState<boolean>(Boolean(flash?.type));

    const isOpen =
        MODALS.includes(currentModal) ||
        isMessageVisible;
    const MESSAGE_CONFIG = getMessageConfig(props.locale as string);

    useEffect(() => {
        setIsMessageVisible(Boolean(flash?.type));
    }, [flash?.type]);

    const handleSkip = () => {
        setIsMessageVisible(false);
    };

    const messageConfig = MESSAGE_CONFIG[flash?.type as keyof typeof MESSAGE_CONFIG];

    const currentConfig = isMessageVisible && messageConfig && {
        ...messageConfig,
        title: t(messageConfig.title),
        subtitle: t(messageConfig.subtitle),
        button: t(messageConfig.button),
        onSkip: handleSkip,
    };

    return {handleClose, isOpen:Boolean(isOpen), currentConfig}
}

export default useAuthContent;
