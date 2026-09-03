import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Popover as PopoverPrimitive} from "radix-ui"
import FillReactionIcon from "@/components/ui/NewsFeed/Quotes/FillReactionIcon.tsx";
import CommentIcon from "@/components/ui/icons/Movie/CommentIcon.tsx";
import {markAllAsRead, markAsRead} from "@/actions/App/Http/Controllers/NotificationController.ts";
import {NotificationModalProps} from "@/types/NotificationTypes.ts";
import useNotificationModal from "@/shared/components/Header/Notification/hooks/useNotificationModal.ts";
import NotificationIcon from "@/components/ui/icons/NotificationIcon.tsx";
import {cn} from "@/lib/utils.ts";


function NotificationModal({
                               children,
                               notifications = [],
                               handleOpenChange,
                               isNotificationsLoading
                           }: NotificationModalProps) {
    const {handleMark} = useNotificationModal();

    return (
        <Popover onOpenChange={handleOpenChange}>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent
                align="end"
                alignOffset={-235}
                sideOffset={8}
                className="w-240.25 min-h-100 z-100 bg-black p-10 max-lg:w-screen"
            >
                <PopoverPrimitive.Arrow width={20} height={20} className="fill-black"/>
                <div className="flex items-center justify-between">
                    <span className="text-white text-[32px] ">Notifications</span>
                    <button onClick={() => handleMark(markAllAsRead())}
                            className='cursor-pointer hover:text-gray-300 underline text-xl text-white'>Mark as all read
                    </button>
                </div>
                <div className="flex flex-col gap-2.5 transition-all duration-200">
                    {isNotificationsLoading ? (
                        Array.from({length: 5}).map((_, i) => (
                            <div key={i}
                                 className="flex items-center gap-5 border rounded-xs p-5 border-[#6C757D]/50 animate-pulse">
                                <div className="w-20 h-20 rounded-full bg-[#6C757D]/40"/>
                                <div className="flex flex-col gap-2 flex-1">
                                    <div className="h-4 w-1/3 bg-[#6C757D]/40 rounded"/>
                                    <div className="h-4 w-2/3 bg-[#6C757D]/40 rounded"/>
                                </div>
                            </div>
                        ))
                    ) : notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-3 py-16">
                            <div className="w-16 h-16 rounded-full bg-[#6C757D]/20 flex items-center justify-center">
                                <NotificationIcon/>
                            </div>
                            <span className="text-[#D9D9D9] text-lg font-normal">No notifications yet</span>
                        </div>
                    ) : (
                        notifications.map((notification) => (
                            <button key={notification.id} onClick={() => {
                                if (notification.read) return;
                                handleMark(markAsRead({id: notification.id}));
                            }}
                                    className="flex justify-between border rounded-xs p-5 border-[#6C757D]/50 cursor-pointer hover:border-[#6C757D]/70 transition-all duration-200">
                                <div className="flex items-center gap-5">
                                    <img className={cn("w-20 h-20 border-2 border-transparent rounded-full object-cover", {
                                        "border-[#198754]": !notification.read
                                    })} alt="notifcation_user_image"
                                         src={notification.user.avatar}/>
                                    <div className="flex flex-col gap-1">
                                        <span
                                            className="flex text-white text-xl font-normal">{notification.user.username}</span>
                                        <div className="flex items-center gap-3">
                                            {notification.type === "comment" ? <CommentIcon className="w-6 h-6"/> :
                                                <FillReactionIcon className="w-6 h-6"/>}
                                            <span className="text-white text-xl font-normal">
                                {notification.type === "comment" ? "Commented to your movie quote" : "Reacted to your quote"}
                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 items-end justify-center">
                                    <span className="text-xl font-normal text-[#D9D9D9]">{notification.time}</span>
                                    {!notification.read &&
                                        <span className="text-xl font-normal text-[#198754]">New</span>}
                                </div>
                            </button>
                        ))
                    )}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default NotificationModal
