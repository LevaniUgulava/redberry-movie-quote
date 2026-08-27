import Lang from "@/shared/components/Header/components/Lang/Lang.tsx";
import NotificationIcon from "@/components/ui/icons/NotificationIcon.tsx";
import LocaleLink from "@/components/LocaleLink";
import NotificationModal from "@/shared/components/Header/Notification/NotificationModal.tsx";
import useButtons from "@/shared/components/Header/components/Buttons/hooks/useButtons.ts";


function Buttons() {

    const {isAuth, notificationsState, handleOpenChange, t,handleLogout,isNotificationsLoading} = useButtons();

    return (
        <div className="flex gap-4">
            {isAuth &&

                <NotificationModal isNotificationsLoading={isNotificationsLoading} notifications={notificationsState.data} handleOpenChange={handleOpenChange}>
                    <div className="flex justify-center items-center relative">
                        <NotificationIcon/>
                        {notificationsState.quantity > 0 && <div
                            className="absolute -top-1 left-4 h-6.25 w-6.25 bg-[#E33812] rounded-full items-center flex justify-center">
                            <span
                                className='text-white text-base leading-[150%] font-medium'>{notificationsState.quantity}</span>
                        </div>}
                    </div>
                </NotificationModal>
            }
            <Lang/>

            {!isAuth ? <>
                <LocaleLink
                    href="/?modal=register"
                    className="w-fit flex justify-center  cursor-pointer rounded-sm bg-main-red px-5 py-1.75 text-base font-normal text-white leading-[150%]"
                >
                    {t('sign_up')}
                </LocaleLink>
                <LocaleLink
                    href="/?modal=login"
                    className="w-fit  flex justify-center cursor-pointer rounded-sm border border-white  px-5 py-1.75 text-base font-normal text-white leading-[150%]"
                >
                    {t('sign_in')}

                </LocaleLink>
            </> : <div>
                <button
                    onClick={handleLogout}
                    className="w-24 flex justify-center cursor-pointer rounded-sm border border-white  px-3.25 py-1.75 text-base font-normal text-white leading-[150%]"
                >
                    Log out
                </button>
            </div>}


        </div>

    );
}

export default Buttons;
