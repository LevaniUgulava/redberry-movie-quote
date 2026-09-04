import {Loader2} from "lucide-react";
import {cn} from "@/lib/utils.ts";

function Spinner({className}: { className?: string }) {
    return <Loader2 className={cn("w-8 h-8 animate-spin text-[#5E5CE6]", className)}/>
}

export default Spinner;
