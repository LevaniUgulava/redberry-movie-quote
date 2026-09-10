import {useEcho} from "@laravel/echo-react";
import {useEffect, useState} from "react";
import {NotificationStateTypes} from "@/shared/components/Header/components/Buttons/ButtonTypes.ts";
import {router, usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {NotificationItem} from "@/types/NotificationTypes.ts";
import {useTranslation} from "react-i18next";
import {logout} from "@/actions/App/Http/Controllers/AuthController.ts";
import useIsMobile from "@/hooks/useIsMobile.ts";

function useButtons() {
    const {props, url} = usePage<PageProps & {
        notificationsQuantity: number,
        notifications: NotificationItem[]
    }>();

    const {auth, notificationsQuantity, notifications,locale} = props;

    const isMobile = useIsMobile();
    const isAuth = auth !== null;
    const isLangVisible = !isMobile || url === `/${locale}`;
    const isSearchIconVisible = url === `/${locale}/newsfeed` && isMobile;
    const {t} = useTranslation("header");

    const [isNotificationsLoading, setIsNotificationsLoading] = useState(false);
    const [notificationsState, setNotificationsState] = useState<NotificationStateTypes>({
        data: notifications,
        quantity: notificationsQuantity
    });
    const [isOpen, setIsOpen] = useState(false);
    const [badgeKey, setBadgeKey] = useState(0);

    const handleNewNotification = () => {
        setBadgeKey((key) => key + 1);
    };

    const handleOpenAndClose = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        setNotificationsState({
            data: notifications || [],
            quantity: notificationsQuantity || 0
        });
    }, [notifications, notificationsQuantity]);

    const handleOpenChange = (open: boolean) => {
        if (open) {
            setIsNotificationsLoading(true);
            router.reload({
                only: ['notifications', 'notificationsQuantity'],
                onFinish: () => setIsNotificationsLoading(false),
            });
        }
    };

    const handleLogout = () => {
        router.post(logout().url);
    };

    return {
        notificationsState,
        isAuth,
        handleOpenChange,
        t,
        handleLogout,
        isNotificationsLoading,
        isOpen,
        handleOpenAndClose,
        isSearchIconVisible,
        isLangVisible,
        auth,
        setNotificationsState,
        badgeKey,
        handleNewNotification
    };
}

export default useButtons;
