import Buttons from "@/shared/components/Header/components/Buttons/Buttons";
import {usePage} from "@inertiajs/react";
import {cn} from "@/lib/utils.ts";
import MobileSidebarIcon from "@/components/ui/icons/Sidebar/MobileSidebarIcon.tsx";
import MobileSidebarWrapper from "@/components/wrapper/MobileSidebarWrapper/MobileSidebarWrapper.tsx";
import {useTranslation} from "react-i18next";
import MobileSidebar from "@/shared/components/Sidebar/MobileSidebar.tsx";

function Header() {
    const {url, props} = usePage();
    const {t} = useTranslation("common");

    return (
        <div className={cn("sticky top-0 z-50 flex px-17.5 max-lg:px-8.75 py-6 justify-between bg-[#222030]", {
            'bg-[#11101A]': url === `/${props.locale}`,
        })}>
            <div
                className=" max-lg:hidden flex items-center text-main-beige uppercase text-base leading-[150%] font-medium">
                <span>{t("movie_quotes")}</span>
            </div>
            <div
                className="hidden max-lg:flex items-center text-main-beige uppercase text-base leading-[150%] font-medium">
                {url === `/${props.locale}` ? (
                    <span>{t("movie_quotes")}</span>
                ) : <MobileSidebarWrapper button={<MobileSidebarIcon/>}>
                    {(setOpen) => <MobileSidebar setOpen={setOpen}/>}
                </MobileSidebarWrapper>}

            </div>


            <div className="flex gap-4">
                <Buttons/>
            </div>
        </div>
    );
}

export default Header;
