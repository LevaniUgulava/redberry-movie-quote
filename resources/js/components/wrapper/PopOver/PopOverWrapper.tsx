import {Button} from "@/components/ui/button"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {ReactNode, useState} from "react";
import useIsMobile from "@/hooks/useIsMobile.ts";

function PopOverWrapper({children, body}: { children: ReactNode, body: ReactNode | ((close: () => void) => ReactNode) }) {
    const isMobile = useIsMobile();
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="cursor-pointer">
                {children}
            </PopoverTrigger>
            <PopoverContent align={isMobile ? 'end' : 'start'} className="w-60 bg-[#24222F]">
                {typeof body === "function" ? body(close) : body}
            </PopoverContent>
        </Popover>
    )
}

export default PopOverWrapper;
