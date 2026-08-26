import {Button} from "@/components/ui/button"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {ReactNode} from "react";

function PopOverWrapper({children, body}: { children: ReactNode, body: ReactNode }) {
    return (
        <Popover>
            <PopoverTrigger className="cursor-pointer">
                {children}
            </PopoverTrigger>
            <PopoverContent align="start" className="w-60 bg-[#24222F]">
                {body}
            </PopoverContent>
        </Popover>
    )
}

export default PopOverWrapper;
