import { Link } from "@inertiajs/react";

function Buttons() {
    return (
        <>
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
        </>
    );
}
export default Buttons;
