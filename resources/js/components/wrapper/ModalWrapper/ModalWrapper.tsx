import {Dialog, DialogContent} from "@/components/ui/dialog";
import {ModalWrapperProps} from "@/components/wrapper/ModalWrapper/ModalWrapperTypes.ts";

function ModalWrapper({isOpen, onClose, children}: ModalWrapperProps) {
    return <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent
            overlayClassName="bg-black/40! backdrop-blur-[2px]!"
            showCloseButton={false}
            className="w-full max-w-240.25! top-24!  translate-y-0! p-0 bg-[linear-gradient(187.16deg,#181623_0.07%,#191725_51.65%,#0D0B14_98.75%)]!">

            {children}
        </DialogContent>
    </Dialog>

}

export default ModalWrapper;
