import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface ModalWrapperProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: VoidFunction;
}
function ModalWrapper({ children, isOpen, onClose }: ModalWrapperProps) {
    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent
                showCloseButton={false}
                className="bg-[#222030] w-fit max-w-none!"
            >
                {children}
            </DialogContent>
        </Dialog>
    );
}
export default ModalWrapper;
