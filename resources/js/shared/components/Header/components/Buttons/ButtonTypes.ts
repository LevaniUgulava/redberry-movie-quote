import {NotificationItem} from "@/types/NotificationTypes.ts";
import {Dispatch, SetStateAction} from "react";

export interface NotificationStateTypes {
    data: NotificationItem[];
    quantity: number;
}


export interface NotificationsState  {
    quantity: number;
    data: any[];
}
export interface NotificationChannelProps{
    id: number,
    setNotificationsState: Dispatch<SetStateAction<NotificationsState>>;
}
