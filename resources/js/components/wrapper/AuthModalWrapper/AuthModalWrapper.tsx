import {ReactNode} from "react";
import {DialogContent,Dialog} from "@/components/ui/dialog.tsx";
import {cn} from "@/lib/utils.ts";
import {AuthModalWrapperProps} from "@/components/wrapper/AuthModalWrapper/AuthModalWrapperTypes.ts";


function AuthModalWrapper({children, isOpen, onClose, className,isConfig}: AuthModalWrapperProps) {
    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent
                showCloseButton={false}
                className={cn("bg-[#222030] w-full max-w-150! transition-opacity! duration-300!", className)}
                overlayClassName={isConfig ? "bg-[linear-gradient(187.16deg,#181623_0.07%,#191725_51.65%,#0D0B14_98.75%)] " : undefined}            >
                {children}
            </DialogContent>
        </Dialog>
    );
}

export default AuthModalWrapper;
