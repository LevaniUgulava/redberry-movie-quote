import CheckMail from "@/components/ui/icons/Message/CheckIcon";
import { MouseEvent, ReactNode } from "react";

interface MessageProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
    button: string;
    skip?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
function Message({
    icon,
    title,
    subtitle,
    button,
    skip = false,
    onClick,
}: MessageProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-10 w-96.25">
            <div className="flex justify-center">{icon}</div>
            <h1 className="text-white text-3xl leading-[120%] font-medium">
                {title}
            </h1>
            <span className="text-white leading-[150%] font-normal text-center">
                {subtitle}
            </span>
            <button
                onClick={onClick}
                className="bg-main-red hover:bg-[#CC0E10] cursor-pointer px-3.25 py-1.75 w-90 text-white rounded-xs"
            >
                {button}
            </button>
            {skip && (
                <span className="text-gray-600 text-base leading-[150%]">
                    Skip, I’ll confirm later
                </span>
            )}
        </div>
    );
}
export default Message;
