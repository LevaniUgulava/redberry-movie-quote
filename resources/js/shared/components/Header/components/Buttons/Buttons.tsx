import LocaleLink from "@/components/LocaleLink";
import {useTranslation} from "react-i18next";

function Buttons() {
    const {t} = useTranslation("header");
    return (
        <>
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
        </>
    );
}
export default Buttons;
