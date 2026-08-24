import Buttons from "@/shared/components/Header/components/Buttons/Buttons";
import {usePage} from "@inertiajs/react";
import {cn} from "@/lib/utils.ts";

function Header() {
    const {url, props} = usePage();
    return (
        <div className={cn("sticky top-0 z-51 flex px-17.5 py-6 justify-between bg-[#222030]", {
            'bg-[#11101A]': url === `/${props.locale}`,
        })}>
            <div className="flex items-center text-main-beige uppercase text-base leading-[150%] font-medium">
                Movie quotes
            </div>
            <div className="flex gap-4">
                <Buttons/>
            </div>
        </div>
    );
}

export default Header;
