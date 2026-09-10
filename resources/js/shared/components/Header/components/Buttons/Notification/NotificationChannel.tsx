 import {useEcho} from "@laravel/echo-react";
import {NotificationChannelProps} from "@/shared/components/Header/components/Buttons/ButtonTypes.ts";


function NotificationChannel({id, setNotificationsState, onNewNotification}: NotificationChannelProps) {
    useEcho(
        `notification.${id}`,
        ['.notification.updated'],
        (e) => {
            setNotificationsState((prev) => ({
                ...prev,
                quantity: prev.quantity + 1,
                data: [e.info, ...prev.data].slice(0, 5)
            }));
            onNewNotification?.();
        }
    );

    return null;
}

export default NotificationChannel;
