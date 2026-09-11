import GoogleIcon from "@/components/ui/icons/Google/GoogleIcon";
import {redirectToProvider} from "@/actions/App/Http/Controllers/GoogleController.ts";
import {useTranslation} from "react-i18next";

function Buttons({
                     showGoogle = true,
                     label,
                 }: {
    showGoogle?: boolean;
    label?: string;
}) {
    const {t} = useTranslation("common");
    return (
        <div className="flex flex-col gap-4">
            <button
                type="submit"
                className="text-white font-normal text-base leading-[150%] bg-main-red hover:bg-[#CC0E10] cursor-pointer rounded-xs px-3.25 py-1.75 w-full"
            >
                {label ?? t("get_started")}
            </button>
            {showGoogle && (
                <button
                    onClick={() => window.location.href = redirectToProvider.url()}
                    type="button"
                    className="border cursor-pointer flex justify-center items-center gap-2 border-[#CED4DA] hover:bg-white/10 text-white font-normal text-base leading-[150%] rounded-xs px-3.25 py-1.75 w-full transition-colors"
                >
                    <GoogleIcon/>
                    <span>{t("sign_in_with_google")}</span>
                </button>
            )}
        </div>
    );
}

export default Buttons;
