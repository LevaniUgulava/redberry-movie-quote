import {Dialog, DialogContent} from "@/components/ui/dialog.tsx";
import {CheckIcon, XIcon} from "lucide-react";
import {SuccessToastProps} from "@/pages/Profile/components/mobile/MobileProfileTypes.ts";
import {useTranslation} from "react-i18next";

function SuccessToast({open, setOpen}: SuccessToastProps) {
    const {t} = useTranslation("profile");
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
            overlayClassName="backdrop-blur-[1px]!"
            showCloseButton={false}
            className="w-full max-w-240.25! top-20! translate-y-0! p-0 bg-[#D1E7DD]/90 px-4 py-3">

            <div className="flex items-center justify-between gap-3  backdrop-blur-xs rounded-lg ">
                <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0F5132]">
                    <CheckIcon className="w-3 h-3 text-white"/>
                </span>
                    <span className="text-[#0F5132] text-sm">{t("changes_updated")}</span>
                </div>
                <button onClick={() => setOpen(false)} className="text-[#0F5132] cursor-pointer">
                    <XIcon className="w-4 h-4"/>
                </button>
            </div>


        </DialogContent>
    </Dialog>
}

export default SuccessToast;
