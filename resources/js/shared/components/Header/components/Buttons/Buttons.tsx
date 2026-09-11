import Lang from "@/shared/components/Header/components/Lang/Lang.tsx";
import NotificationIcon from "@/components/ui/icons/NotificationIcon.tsx";
import LocaleLink from "@/components/LocaleLink";
import NotificationModal from "@/shared/components/Header/Notification/NotificationModal.tsx";
import SearchIcon from "@/components/ui/NewsFeed/SearchIcon.tsx";
import SearchModal from "@/pages/NewsFeed/components/SearchModal/SearchModal.tsx";
import useButtons from "@/shared/components/Header/components/Buttons/hooks/useButtons.ts";
import NotificationChannel from "./Notification/NotificationChannel.tsx";

function Buttons() {
    const {
        isAuth,
        notificationsState,
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
    } = useButtons();

    return (
        <div className="flex gap-4 max-lg:gap-2">
            {auth?.id && <NotificationChannel id={auth.id} setNotificationsState={setNotificationsState}
                                              onNewNotification={handleNewNotification}/>}
            {isAuth && <div className="flex items-center gap-8">
                {isSearchIconVisible && <>
                    <div onClick={handleOpenAndClose} className="cursor-pointer">
                        <SearchIcon classname="max-lg:w-6 max-lg:h-6 text-white"/>
                    </div>
                    <SearchModal isOpen={isOpen} onClose={handleOpenAndClose}/>
                </>}

                <NotificationModal
                    isNotificationsLoading={isNotificationsLoading}
                    notifications={notificationsState.data}
                    handleOpenChange={handleOpenChange}
                >
                    <div className="flex justify-center items-center relative transition-transform duration-200 hover:scale-110 cursor-pointer">
                        <NotificationIcon/>
                        {notificationsState.quantity > 0 && <div
                            key={badgeKey}
                            className="absolute -top-1 max-lg:-top-2 left-4 max-lg:left-3 max-lg:h-4 max-lg:w-4 h-6.25 w-6.25 bg-[#E33812] rounded-full items-center flex justify-center animate-notif-bounce">
                            <span
                                className='text-white text-base max-lg:text-sm leading-[150%] font-medium'>{notificationsState.quantity}</span>
                        </div>}
                    </div>
                </NotificationModal>
            </div>}

            {isLangVisible && <div>
                <Lang/>
            </div>}

            {!isAuth ? <>
                <LocaleLink
                    href="/?modal=register"
                    className="w-fit flex items-center justify-center  cursor-pointer rounded-sm bg-main-red hover:bg-[#CC0E10] px-5 py-1.75 text-base max-lg:text-sm max-lg:px-3.25  font-normal text-white leading-[150%] transition-colors"
                >
                    {t('sign_up')}
                </LocaleLink>
                <LocaleLink
                    href="/?modal=login"
                    className="w-fit  flex items-center justify-center cursor-pointer rounded-sm border border-white hover:bg-white/10 max-lg:text-sm max-lg:px-3.25  px-5 py-1.75 text-base font-normal text-white leading-[150%] transition-colors"
                >
                    {t('sign_in')}
                </LocaleLink>
            </> : <div>
                <button
                    onClick={handleLogout}
                    className="max-lg:hidden w-24 flex justify-center cursor-pointer rounded-sm border border-white max-lg:text-sm px-3.25 py-1.75 text-base font-normal text-white leading-[150%] transition-colors duration-200 hover:bg-main-red hover:border-main-red"
                >
                    {t('log_out')}
                </button>
            </div>}
        </div>
    );
}

export default Buttons;
