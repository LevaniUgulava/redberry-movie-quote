import Lang from "@/shared/components/Header/components/Lang/Lang.tsx";
import NotificationIcon from "@/components/ui/icons/NotificationIcon.tsx";
import LocaleLink from "@/components/LocaleLink";
import NotificationModal from "@/shared/components/Header/Notification/NotificationModal.tsx";
import SearchIcon from "@/components/ui/NewsFeed/SearchIcon.tsx";
import SearchModal from "@/pages/NewsFeed/components/SearchModal/SearchModal.tsx";
import useButtons from "@/shared/components/Header/components/Buttons/hooks/useButtons.ts";

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
    } = useButtons();

    return (
        <div className="flex gap-4 max-lg:gap-2">
            {isAuth && <div className="flex items-center gap-8">
                {isSearchIconVisible && <>
                    <div onClick={handleOpenAndClose}>
                        <SearchIcon classname="max-lg:w-6 max-lg:h-6 text-white"/>
                    </div>
                    <SearchModal isOpen={isOpen} onClose={handleOpenAndClose}/>
                </>}

                <NotificationModal
                    isNotificationsLoading={isNotificationsLoading}
                    notifications={notificationsState.data}
                    handleOpenChange={handleOpenChange}
                >
                    <div className="flex justify-center items-center relative">
                        <NotificationIcon/>
                        {notificationsState.quantity > 0 && <div
                            className="absolute -top-1 max-lg:-top-2 left-4 max-lg:left-3 max-lg:h-4 max-lg:w-4 h-6.25 w-6.25 bg-[#E33812] rounded-full items-center flex justify-center">
                            <span className='text-white text-base max-lg:text-sm leading-[150%] font-medium'>{notificationsState.quantity}</span>
                        </div>}
                    </div>
                </NotificationModal>
            </div>}

            <div className='max-lg:hidden'>
                <Lang/>
            </div>

            {!isAuth ? <>
                <LocaleLink
                    href="/?modal=register"
                    className="w-fit flex justify-center  cursor-pointer rounded-sm bg-main-red px-5 py-1.75 text-base max-lg:text-sm max-lg:px-3.25  font-normal text-white leading-[150%]"
                >
                    {t('sign_up')}
                </LocaleLink>
                <LocaleLink
                    href="/?modal=login"
                    className="w-fit  flex justify-center cursor-pointer rounded-sm border border-white max-lg:text-sm max-lg:px-3.25  px-5 py-1.75 text-base font-normal text-white leading-[150%]"
                >
                    {t('sign_in')}
                </LocaleLink>
            </> : <div>
                <button
                    onClick={handleLogout}
                    className="max-lg:hidden w-24 flex justify-center cursor-pointer rounded-sm border border-white  max-lg:text-sm px-3.25 py-1.75 text-base font-normal text-white leading-[150%]"
                >
                    Log out
                </button>
            </div>}
        </div>
    );
}

export default Buttons;
