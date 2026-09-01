import {Link, router, usePage} from "@inertiajs/react";
import Lang from "@/shared/components/Header/components/Lang/Lang.tsx";
import NotificationIcon from "@/components/ui/icons/NotificationIcon.tsx";
import LocaleLink from "@/components/LocaleLink";
import {useTranslation} from "react-i18next";
import {logout} from "@/actions/App/Http/Controllers/AuthController";
import SearchIcon from "@/components/ui/NewsFeed/SearchIcon.tsx";

function Buttons() {
    const {auth} = usePage().props
    const isAuth = auth !== null;
    const {t} = useTranslation("header");


    return (
        <div className="flex gap-4 max-lg:gap-2">
            {isAuth && <div className="flex items-center gap-8">
                <div>
                    <SearchIcon classname="max-lg:w-6 max-lg:h-6 text-white"/>
                </div>
                <div className="flex justify-center items-center relative">
                    <NotificationIcon/>
                    <div
                        className="absolute -top-1 max-lg:-top-2 left-4 max-lg:left-3 max-lg:h-4 max-lg:w-4 h-6.25 w-6.25 bg-[#E33812] rounded-full items-center flex justify-center">
                        <span className='text-white text-base max-lg:text-sm leading-[150%] font-medium'>3</span>
                    </div>

                </div>
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
                    onClick={() => router.post(logout().url)}
                    className=" max-lg:hidden w-24 flex justify-center cursor-pointer rounded-sm border border-white  max-lg:text-sm px-3.25 py-1.75 text-base font-normal text-white leading-[150%]"
                >
                    {t('log_out')}
                </button>
            </div>}


        </div>

    );
}

export default Buttons;
