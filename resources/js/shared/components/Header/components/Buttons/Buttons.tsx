import {Link, usePage} from "@inertiajs/react";
import Lang from "@/shared/components/Header/components/Lang/Lang.tsx";
import NotificationIcon from "@/components/ui/icons/NotificationIcon.tsx";

function Buttons() {
    const {auth} = usePage().props
    const isAuth = auth !== null;
    console.log(auth)
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
                <Link
                    href="?modal=register"
                    className="w-27.25 flex justify-center  cursor-pointer rounded-sm bg-main-red px-3.25 py-1.75 text-base font-normal text-white leading-[150%]"
                >
                    Sign Up
                </Link>
                <Link
                    href="?modal=login"
                    className="w-27.25 flex justify-center cursor-pointer rounded-sm border border-white  px-3.25 py-1.75 text-base font-normal text-white leading-[150%]"
                >
                    Log In
                </Link>
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
