import {ReactNode} from "react";

export interface NotificationItem {
    id: number,
    user: {
        id: number;
        username: string;
        avatar?: string;
    };
    type: string;
    read: boolean;
    time: string;
}
export interface NotificationModalProps {
    children: ReactNode;
    notifications?: NotificationItem[];
    handleOpenChange: (open: boolean) => void;
    isNotificationsLoading:boolean
}
