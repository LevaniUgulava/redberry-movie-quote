import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {ReactNode, useState} from "react";

function MobileSidebarWrapper({children, button}: { children: (setOpen: (open: boolean) => void) => ReactNode, button: ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <Drawer direction="left" open={open} onOpenChange={setOpen}>
            <DrawerTrigger>{button}</DrawerTrigger>
            <DrawerContent
                className="bg-[#11101A] border-0! p-10"
            >
                {children(setOpen)}
            </DrawerContent>
        </Drawer>
    )
}

export default MobileSidebarWrapper;
