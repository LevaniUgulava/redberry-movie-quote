import {Link, usePage} from "@inertiajs/react";
import Lang from "@/shared/components/Header/components/Lang/Lang.tsx";
import NotificationIcon from "@/components/ui/icons/NotificationIcon.tsx";
import LocaleLink from "@/components/LocaleLink";
import {useTranslation} from "react-i18next";
        
function Buttons() {
    const {auth} = usePage().props
    const isAuth = auth !== null;
    const {t} = useTranslation("header");

    
    return (
        <div className="flex gap-4">
            {isAuth && <div className="flex justify-center items-center relative">
                <NotificationIcon/>
                <div className="absolute -top-1 left-4 h-6.25 w-6.25 bg-[#E33812] rounded-full items-center flex justify-center">
                    <span className='text-white text-base leading-[150%] font-medium'>3</span>
                </div>

            </div>}
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
                <Link
                    href="?modal=login"
                    className="w-24 flex justify-center cursor-pointer rounded-sm border border-white  px-3.25 py-1.75 text-base font-normal text-white leading-[150%]"
                >
                    Log out
                </Link>
            </div>}


        </div>

    );
}

export default Buttons;
