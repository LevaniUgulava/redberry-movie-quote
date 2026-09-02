import {useEcho} from "@laravel/echo-react";
import {useEffect, useState} from "react";
import {NotificationStateTypes} from "@/shared/components/Header/components/Buttons/ButtonTypes.ts";
import {router, usePage} from "@inertiajs/react";
import {PageProps} from "@/types/PagePropsTypes.ts";
import {NotificationItem} from "@/types/NotificationTypes.ts";
import {useTranslation} from "react-i18next";
import {logout} from "@/actions/App/Http/Controllers/AuthController.ts";

function useButtons() {
    const {auth, notificationsQuantity, notifications, url, props} = usePage<PageProps & {
        notificationsQuantity: number,
        notifications: NotificationItem[]
    }>();

    const isAuth = auth !== null;
    const isSearchIconVisible = url === `/${props.locale}/newsfeed`;
    const {t} = useTranslation("header");

    const [isNotificationsLoading, setIsNotificationsLoading] = useState(false);
    const [notificationsState, setNotificationsState] = useState<NotificationStateTypes>({
        data: notifications,
        quantity: notificationsQuantity
    });
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenAndClose = () => {
        setIsOpen(prev => !prev);
    };

    useEcho(
        isAuth && auth?.id ? `notification.${auth.id}` : "",
        ['.notification.updated'],
        (e) => {
            setNotificationsState((prev) => ({
                ...prev,
                quantity: prev.quantity + 1,
                data: [e.info, ...prev.data].slice(0, 5)
            }));
        }
    );

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
    };
}

export default useButtons;
